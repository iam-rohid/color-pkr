"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const electron_1 = require("electron");
exports.api = {
    platform: process.platform,
};
electron_1.contextBridge.exposeInMainWorld("main", exports.api);
electron_1.contextBridge.exposeInMainWorld("ipcRenderer", electron_1.ipcRenderer);
