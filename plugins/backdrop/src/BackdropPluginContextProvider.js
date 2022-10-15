"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKGROUND_OPTIONS = void 0;
const react_1 = __importDefault(require("react"));
const internal_1 = require("react-native-sandbox/internal");
const internal_2 = require("react-native-sandbox/internal");
const BackdropPluginContext_1 = __importDefault(require("./BackdropPluginContext"));
const BackdropContainer_1 = __importDefault(require("./components/BackdropContainer"));
const ToolbarItems_1 = require("./components/ToolbarItems");
exports.BACKGROUND_OPTIONS = [null, 'white', 'black', 'gray'];
function BackdropPluginContextProvider(props) {
    const { children } = props;
    const { activeComponent, registerLayer, registerToolbarGroup } = (0, internal_1.useSandbox)();
    const [backdrop, setBackdrop] = react_1.default.useState(null);
    const [disabled, setDisabled] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        const options = (0, internal_2.getSandboxOptionsForPlugin)('backdrop', activeComponent);
        const disable = options.enabled === false;
        if (activeComponent && !disable) {
            registerLayer({ id: 'backdrop', component: BackdropContainer_1.default, level: -1 });
            registerToolbarGroup({
                id: 'backdrop',
                items: [
                    { id: 'backdrop-color', component: ToolbarItems_1.ColorChip },
                ],
            });
            setDisabled(false);
        }
        else if (disable) {
            setDisabled(true);
        }
    }, [activeComponent]);
    return (<BackdropPluginContext_1.default.Provider value={{
            backdrop,
            disabled,
            setBackdrop,
        }}>
      {children}
    </BackdropPluginContext_1.default.Provider>);
}
exports.default = BackdropPluginContextProvider;
