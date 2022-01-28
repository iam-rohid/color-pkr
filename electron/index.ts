import { app, BrowserWindow, ipcMain, Menu } from "electron";
const windowStateKeeper = require("electron-window-state");
import path from "path";
import isDev from "electron-is-dev";

let mainWindow: BrowserWindow | null;
const isMacOs = process.platform === "darwin";

const createWindow = () => {
  const windowState = windowStateKeeper({
    defaultWidth: 700,
    defaultHeight: 600,
  });

  mainWindow = new BrowserWindow({
    minWidth: 400,
    minHeight: 500,
    width: windowState.width,
    height: windowState.height,
    x: windowState.x,
    y: windowState.y,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  const port = process.env.PORT || 3000;
  const url = isDev
    ? `http://localhost:${port}`
    : path.join(__dirname, "../src/out/index.html");

  if (isDev) {
    mainWindow.loadURL(url);
  } else {
    mainWindow.loadFile(url);
  }
  windowState.manage(window);
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (!isMacOs) {
    app.quit();
  }
});

ipcMain.on("MINIMIZE_WINDOW", () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window && window.minimizable) window.minimize();
});
ipcMain.on("MAXIMIZE_WINDOW", () => {
  const window = BrowserWindow.getFocusedWindow();
  if (!window || !window.isMaximizable) return;
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
});
ipcMain.on("CLOSE_WINDOW", () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window && window.closable) window.close();
});
ipcMain.on("OPEN_MENU_EVENT", () => {
  Menu.getApplicationMenu()?.popup();
});
