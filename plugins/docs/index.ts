import DocsPluginContextProvider from "./src/DocsPluginContextProvider";

export { default as useDoc } from './src/useDoc';

const plugin = {
    id: 'docs',
    provider: DocsPluginContextProvider,
    configure: () => {},
} as any;

plugin.configure = (options) => {
    return {
        ...plugin,
        options,
    };
}

export default plugin;
