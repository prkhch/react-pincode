"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./style.css");
var _NUM_ZERO_ICON = _interopRequireDefault(require("./icons/NUM_ZERO_ICON"));
var _NUM_ONE_ICON = _interopRequireDefault(require("./icons/NUM_ONE_ICON"));
var _NUM_TWO_ICON = _interopRequireDefault(require("./icons/NUM_TWO_ICON"));
var _NUM_THREE_ICON = _interopRequireDefault(require("./icons/NUM_THREE_ICON"));
var _NUM_FOUR_ICON = _interopRequireDefault(require("./icons/NUM_FOUR_ICON"));
var _NUM_FIVE_ICON = _interopRequireDefault(require("./icons/NUM_FIVE_ICON"));
var _NUM_SIX_ICON = _interopRequireDefault(require("./icons/NUM_SIX_ICON"));
var _NUM_SEVEN_ICON = _interopRequireDefault(require("./icons/NUM_SEVEN_ICON"));
var _NUM_EIGHT_ICON = _interopRequireDefault(require("./icons/NUM_EIGHT_ICON"));
var _NUM_NINE_ICON = _interopRequireDefault(require("./icons/NUM_NINE_ICON"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NumberIcon = props => {
  if (props.value === 0) {
    return /*#__PURE__*/_react.default.createElement(_NUM_ZERO_ICON.default, {
      props: props
    });
  }
  if (props.value === 1) {
    return /*#__PURE__*/_react.default.createElement(_NUM_ONE_ICON.default, {
      props: props
    });
  }
  if (props.value === 2) {
    return /*#__PURE__*/_react.default.createElement(_NUM_TWO_ICON.default, {
      props: props
    });
  }
  if (props.value === 3) {
    return /*#__PURE__*/_react.default.createElement(_NUM_THREE_ICON.default, {
      props: props
    });
  }
  if (props.value === 4) {
    return /*#__PURE__*/_react.default.createElement(_NUM_FOUR_ICON.default, {
      props: props
    });
  }
  if (props.value === 5) {
    return /*#__PURE__*/_react.default.createElement(_NUM_FIVE_ICON.default, {
      props: props
    });
  }
  if (props.value === 6) {
    return /*#__PURE__*/_react.default.createElement(_NUM_SIX_ICON.default, {
      props: props
    });
  }
  if (props.value === 7) {
    return /*#__PURE__*/_react.default.createElement(_NUM_SEVEN_ICON.default, {
      props: props
    });
  }
  if (props.value === 8) {
    return /*#__PURE__*/_react.default.createElement(_NUM_EIGHT_ICON.default, {
      props: props
    });
  }
  if (props.value === 9) {
    return /*#__PURE__*/_react.default.createElement(_NUM_NINE_ICON.default, {
      props: props
    });
  }
};
var _default = exports.default = NumberIcon;