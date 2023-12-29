"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _FUNC_RESET_ICON = require("./icons/bottom/FUNC_RESET_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResetIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_FUNC_RESET_ICON.ReactComponent, {
    className: "funcIcon",
    onClick: () => props.resetInputValue(),
    fill: props.resetButtonColor
  });
};
var _default = exports.default = ResetIcon;