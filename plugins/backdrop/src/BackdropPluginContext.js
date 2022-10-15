"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BackdropPluginContext = react_1.default.createContext({
    backdrop: 'transparent',
    disabled: false,
    setBackdrop: () => console.warn('backdrop not ready'),
});
exports.default = BackdropPluginContext;
