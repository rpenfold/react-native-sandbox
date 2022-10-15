"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackdropPluginContextProvider_1 = __importDefault(require("./src/BackdropPluginContextProvider"));
exports.default = {
    id: 'backdrop',
    provider: BackdropPluginContextProvider_1.default,
};
