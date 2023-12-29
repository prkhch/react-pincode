"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _FUNC_DEL_ICON = require("./icons/FUNC_DEL_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DeleteIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_FUNC_DEL_ICON.ReactComponent, {
    className: "funcIcon",
    onClick: () => props.popNumber(),
    fill: props.deleteButtonColor
  });
};
var _default = exports.default = DeleteIcon;