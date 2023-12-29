"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _INPUT_FILL_ICON = require("./icons/INPUT_FILL_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const CircleIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_INPUT_FILL_ICON.ReactComponent, {
    fill: props.iconColor,
    className: "fadeIn"
  });
};
var _default = exports.default = CircleIcon;