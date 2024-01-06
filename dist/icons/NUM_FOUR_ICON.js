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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
var NUM_FOUR_ICON = function (props) {
    var _a = useState(false), isHovered = _a[0], setIsHovered = _a[1];
    return (_jsxs("svg", __assign({ width: "48", height: "48", viewBox: "0 0 70 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "keypadIcon", onClick: function () { return props.props.pushNumber(); }, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, { children: [props.props.styleNumberButtonColor && (_jsx("circle", { cx: "35", cy: "35", r: "35", fill: isHovered
                    ? props.props.styleHoverColor
                    : props.props.styleNumberButtonColor })), _jsx("path", { d: "M42.3783 37.2217V40.2686H27.0121L26.851 37.9248L35.8891 23.6719H38.9799L35.64 29.3408L30.7914 37.2217H42.3783ZM39.8441 23.6719V45H35.9623V23.6719H39.8441Z", fill: props.props.styleNumberFontColor })] })));
};
export default NUM_FOUR_ICON;
