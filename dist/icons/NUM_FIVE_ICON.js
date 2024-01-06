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
var NUM_FIVE_ICON = function (props) {
    var _a = useState(false), isHovered = _a[0], setIsHovered = _a[1];
    return (_jsxs("svg", __assign({ width: "48", height: "48", viewBox: "0 0 70 70", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "keypadIcon", onClick: function () { return props.props.pushNumber(); }, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); } }, { children: [_jsx("circle", { cx: "35", cy: "35", r: "35", fill: isHovered
                    ? props.props.styleHoverColor
                    : props.props.styleNumberButtonColor }), _jsx("path", { d: "M31.4066 35.1855L28.3158 34.4385L29.5023 23.6719H41.2357V26.8799H32.7104L32.1537 31.8604C32.4564 31.6748 32.8959 31.4893 33.4721 31.3037C34.058 31.1084 34.7172 31.0107 35.4496 31.0107C36.4652 31.0107 37.3734 31.1768 38.1742 31.5088C38.975 31.8311 39.6537 32.2998 40.2104 32.915C40.7768 33.5303 41.2016 34.2822 41.4848 35.1709C41.7777 36.0498 41.9242 37.0459 41.9242 38.1592C41.9242 39.1357 41.7777 40.0537 41.4848 40.9131C41.2016 41.7627 40.767 42.5195 40.1811 43.1836C39.5951 43.8379 38.8578 44.3555 37.9691 44.7363C37.0805 45.1074 36.0355 45.293 34.8344 45.293C33.9262 45.293 33.0521 45.1611 32.2123 44.8975C31.3822 44.624 30.6352 44.2285 29.9711 43.7109C29.307 43.1836 28.7748 42.5391 28.3744 41.7773C27.9838 41.0156 27.7689 40.1416 27.7299 39.1553H31.5531C31.6215 39.8096 31.7973 40.3662 32.0805 40.8252C32.3637 41.2842 32.7348 41.6357 33.1938 41.8799C33.6625 42.124 34.2045 42.2461 34.8197 42.2461C35.3764 42.2461 35.8549 42.1436 36.2553 41.9385C36.6654 41.7236 37.0023 41.4258 37.266 41.0449C37.5297 40.6641 37.725 40.2148 37.852 39.6973C37.9789 39.1797 38.0424 38.6133 38.0424 37.998C38.0424 37.4023 37.9691 36.8604 37.8227 36.3721C37.6762 35.874 37.4516 35.4443 37.1488 35.083C36.8461 34.7217 36.4652 34.4434 36.0063 34.248C35.557 34.0527 35.0297 33.9551 34.4242 33.9551C33.6137 33.9551 32.9887 34.0771 32.5492 34.3213C32.1195 34.5654 31.7387 34.8535 31.4066 35.1855Z", fill: props.props.styleNumberFontColor })] })));
};
export default NUM_FIVE_ICON;
