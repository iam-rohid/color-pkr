"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const windowStateKeeper = require("electron-window-state");
const path_1 = __importDefault(require("path"));
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
let mainWindow;
const isMacOs = process.platform === "darwin";
const createWindow = () => {
    const windowState = windowStateKeeper({
        defaultWidth: 700,
        defaultHeight: 600,
    });
    mainWindow = new electron_1.BrowserWindow({
        minWidth: 600,
        minHeight: 400,
        width: windowState.width,
        height: windowState.height,
        x: windowState.x,
        y: windowState.y,
        webPreferences: {
            preload: path_1.default.join(__dirname, "preload.ts"),
        },
    });
    const port = process.env.PORT || 3000;
    const url = electron_is_dev_1.default
        ? `http://localhost:${port}`
        : path_1.default.join(__dirname, "../src/out/index.html");
    if (electron_is_dev_1.default) {
        mainWindow.loadURL(url);
    }
    else {
        mainWindow.loadFile(url);
    }
    windowState.manage(window);
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on("activate", () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
electron_1.app.on("window-all-closed", () => {
    if (!isMacOs) {
        electron_1.app.quit();
    }
});
electron_1.ipcMain.on("MINIMIZE_WINDOW", () => {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    if (window && window.minimizable)
        window.minimize();
});
electron_1.ipcMain.on("MAXIMIZE_WINDOW", () => {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    if (!window || !window.isMaximizable)
        return;
    if (window.isMaximized()) {
        window.unmaximize();
    }
    else {
        window.maximize();
    }
});
electron_1.ipcMain.on("CLOSE_WINDOW", () => {
    const window = electron_1.BrowserWindow.getFocusedWindow();
    if (window && window.closable)
        window.close();
});
electron_1.ipcMain.on("OPEN_MENU_EVENT", () => {
    electron_1.Menu.getApplicationMenu()?.popup();
});
