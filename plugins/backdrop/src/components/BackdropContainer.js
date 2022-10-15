"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const BackdropPluginContext_1 = __importDefault(require("../BackdropPluginContext"));
const BackdropLayer_1 = __importDefault(require("./BackdropLayer"));
function BackdropContainer() {
    const { backdrop, disabled } = react_1.default.useContext(BackdropPluginContext_1.default);
    if (disabled) {
        return null;
    }
    return (<BackdropLayer_1.default backdrop={backdrop}/>);
}
exports.default = BackdropContainer;
