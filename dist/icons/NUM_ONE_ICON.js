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
var NUM_ONE_ICON = function (props) {
    var _a = useState(false), isHovered = _a[0], setIsHovered = _a[1];
    return (_jsxs("svg", __assign({ width: "48", height: "48", viewBox: "0 0 70 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "keypadIcon", onClick: function () { return props.props.pushNumber(); }, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, { children: [_jsx("circle", { cx: "35", cy: "35", r: "35", fill: isHovered
                    ? props.props.styleHoverColor
                    : props.props.styleNumberButtonColor }), _jsx("path", { d: "M37.5297 23.6133V45H33.6479V28.1396L28.5063 29.8389V26.7041L37.0902 23.6133H37.5297Z", fill: props.props.styleNumberFontColor })] })));
};
export default NUM_ONE_ICON;
