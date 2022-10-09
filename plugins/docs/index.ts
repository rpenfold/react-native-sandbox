import DocsPluginContextProvider from "./src/DocsPluginContextProvider";

export { default as useDoc } from './src/useDoc';

export default {
    id: 'docs',
    provider: DocsPluginContextProvider
};
