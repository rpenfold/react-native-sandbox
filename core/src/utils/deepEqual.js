"use strict";
exports.__esModule = true;
function deepEqual(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (var key in a) {
        var a_value = a[key];
        var b_value = b[key];
        if ((a_value instanceof Object && !deepEqual(a_value, b_value))
            || (!(a_value instanceof Object) && a_value !== b_value)) {
            return false;
        }
    }
    return true;
}
exports["default"] = deepEqual;
