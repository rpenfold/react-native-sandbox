export default function getSandboxOptionsForPlugin(plugin: string, sandbox: any) {
    const options = sandbox?.plugins?.[plugin];
    
    if (options === false) {
        return { enabled: false };
    }

    return options ?? {};
}