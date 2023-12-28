"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RESET_ICON = require("./icons/RESET_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ResetIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_RESET_ICON.ReactComponent, {
    onClick: () => props.resetInputValue(),
    fill: props.resetButtonColor
  });
};
var _default = exports.default = ResetIcon;