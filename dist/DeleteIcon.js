"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DELETE_ICON = require("./icons/DELETE_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const DeleteIcon = props => {
  return /*#__PURE__*/_react.default.createElement(_DELETE_ICON.ReactComponent, {
    onClick: () => props.popNumber(),
    fill: props.deleteButtonColor
  });
};
var _default = exports.default = DeleteIcon;