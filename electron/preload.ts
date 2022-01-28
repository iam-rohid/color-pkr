import namedColors from "color-name-list";
import { ipcRenderer, contextBridge } from "electron";
declare global {
  interface Window {
    main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}
export const api = {
  platform: process.platform,
  namedColors,
};

contextBridge.exposeInMainWorld("main", api);
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer);
