"use strict";
exports.__esModule = true;
function getSandboxOptionsForPlugin(plugin, sandbox) {
    var _a;
    var options = (_a = sandbox === null || sandbox === void 0 ? void 0 : sandbox.plugins) === null || _a === void 0 ? void 0 : _a[plugin];
    if (options === false) {
        return { enabled: false };
    }
    return options !== null && options !== void 0 ? options : {};
}
exports["default"] = getSandboxOptionsForPlugin;
