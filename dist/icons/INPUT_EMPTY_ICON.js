var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var INPUT_FILL_ICON = function (props) { return (_jsx("svg", __assign({ width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: _jsx("rect", { width: "48", height: "48", rx: "6", fill: props.styleInputBoxColor }) }))); };
export default INPUT_FILL_ICON;
