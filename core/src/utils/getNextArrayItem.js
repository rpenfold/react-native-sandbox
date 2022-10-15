"use strict";
exports.__esModule = true;
function getNextArrayItem(arr) {
    return function (curr) {
        return arr[(arr.findIndex(function (val) { return val === curr; }) + 1) % arr.length];
    };
}
exports["default"] = getNextArrayItem;
