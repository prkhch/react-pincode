"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _CIRCLE_ICON_FILL = require("./icons/CIRCLE_ICON_FILL.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CircleIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_CIRCLE_ICON_FILL.ReactComponent, {
    fill: props.iconColor,
    className: "fadeIn"
  });
};
var _default = exports.default = CircleIcon;