import ControlsPluginContextProvider from "./src/ControlsPluginProvider";

export {default as useBoolean} from './src/controls/bool/useBoolControl';
export {default as useColor} from './src/controls/color/useColorControl';
export {default as useDivider} from './src/controls/divider/useDivider';
export {default as useObject} from './src/controls/object/useObjectControl';
export {default as useLabel} from './src/controls/label/useLabel';
export {default as useInfo} from './src/controls/info/useInfo';
export {default as useNumber} from './src/controls/number/useNumberControl';
export {default as useSelect} from './src/controls/select/useSelectControl';
export {default as useText} from './src/controls/text/useTextControl';

export default {
    id: 'controls',
    provider: ControlsPluginContextProvider
};
