"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
function BackdropLayer(props) {
    const { backdrop } = props;
    if (typeof backdrop === 'string') {
        return (<react_native_1.View style={[react_native_1.StyleSheet.absoluteFill, { backgroundColor: backdrop }]}/>);
    }
    // TODO: add support for image backdrops
    return null;
}
exports.default = BackdropLayer;
