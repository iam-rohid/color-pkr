"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const color_name_list_1 = __importDefault(require("color-name-list"));
const electron_1 = require("electron");
exports.api = {
    platform: process.platform,
    namedColors: color_name_list_1.default,
};
electron_1.contextBridge.exposeInMainWorld("main", exports.api);
electron_1.contextBridge.exposeInMainWorld("ipcRenderer", electron_1.ipcRenderer);
