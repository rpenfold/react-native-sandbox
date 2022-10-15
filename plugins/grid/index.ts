import GridPluginContextProvider from "./src/GridPluginContextProvider";

const plugin = {
    id: 'grid',
    provider: GridPluginContextProvider,
} as any;

plugin.configure = (options) => ({
    ...plugin,
    options,
});

export default plugin;
