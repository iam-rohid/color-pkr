import { ipcRenderer, contextBridge } from "electron";

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}

export const api = {
  platform: process.platform,
};

contextBridge.exposeInMainWorld("main", api);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
