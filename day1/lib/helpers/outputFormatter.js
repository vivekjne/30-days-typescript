"use strict";
exports.__esModule = true;
exports.outputFormatter = void 0;
function outputFormatter() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(JSON.stringify(args, null, 2));
}
exports.outputFormatter = outputFormatter;
//# sourceMappingURL=outputFormatter.js.map