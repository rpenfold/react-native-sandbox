"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorChip = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const BackdropPluginContext_1 = __importDefault(require("../BackdropPluginContext"));
const BackdropPluginContextProvider_1 = require("../BackdropPluginContextProvider");
const internal_1 = require("react-native-sandbox/internal");
const components_1 = require("react-native-sandbox/components");
function ColorChip() {
    const { backdrop, setBackdrop } = react_1.default.useContext(BackdropPluginContext_1.default);
    let content = `${backdrop}`;
    if (backdrop === null) {
        content = <components_1.Icon name="circle-opacity"/>;
    }
    else if (typeof backdrop === 'string') {
        content = (<react_native_1.View style={{
                margin: 1,
                backgroundColor: backdrop,
                borderWidth: 1,
                borderRadius: 50,
                height: components_1.Icon.DefaultSize - 2,
                width: components_1.Icon.DefaultSize - 2
            }}/>);
    }
    return (<components_1.Chip onPress={() => setBackdrop((0, internal_1.getNextArrayItem)(BackdropPluginContextProvider_1.BACKGROUND_OPTIONS)(backdrop))}>
            {content}
        </components_1.Chip>);
}
exports.ColorChip = ColorChip;
