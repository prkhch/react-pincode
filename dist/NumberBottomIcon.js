"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _ZERO_ICON = require("./icons/bottom/ZERO_ICON.svg");
var _ONE_ICON = require("./icons/bottom/ONE_ICON.svg");
var _TWO_ICON = require("./icons/bottom/TWO_ICON.svg");
var _THREE_ICON = require("./icons/bottom/THREE_ICON.svg");
var _FOUR_ICON = require("./icons/bottom/FOUR_ICON.svg");
var _FIVE_ICON = require("./icons/bottom/FIVE_ICON.svg");
var _SIX_ICON = require("./icons/bottom/SIX_ICON.svg");
var _SEVEN_ICON = require("./icons/bottom/SEVEN_ICON.svg");
var _EIGHT_ICON = require("./icons/bottom/EIGHT_ICON.svg");
var _NINE_ICON = require("./icons/bottom/NINE_ICON.svg");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NumberIcon = props => {
  if (props.value === 0) {
    return /*#__PURE__*/_react.default.createElement(_ZERO_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 1) {
    return /*#__PURE__*/_react.default.createElement(_ONE_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 2) {
    return /*#__PURE__*/_react.default.createElement(_TWO_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 3) {
    return /*#__PURE__*/_react.default.createElement(_THREE_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 4) {
    return /*#__PURE__*/_react.default.createElement(_FOUR_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 5) {
    return /*#__PURE__*/_react.default.createElement(_FIVE_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 6) {
    return /*#__PURE__*/_react.default.createElement(_SIX_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 7) {
    return /*#__PURE__*/_react.default.createElement(_SEVEN_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 8) {
    return /*#__PURE__*/_react.default.createElement(_EIGHT_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
  if (props.value === 9) {
    return /*#__PURE__*/_react.default.createElement(_NINE_ICON.ReactComponent, {
      onClick: () => props.pushNumber(),
      fill: props.numberButtonColor
    });
  }
};
var _default = exports.default = NumberIcon;