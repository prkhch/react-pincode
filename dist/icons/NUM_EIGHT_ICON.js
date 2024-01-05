"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_EIGHT_ICON = props => {
  const [isHovered, setIsHovered] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "keypadIcon",
    onClick: () => props.props.pushNumber(),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "35",
    cy: "35",
    r: "35",
    fill: isHovered ? props.props.styleHoverColor : props.props.styleNumberButtonColor
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M41.7191 39.1699C41.7191 40.498 41.4066 41.6211 40.7816 42.5391C40.1664 43.4473 39.3217 44.1357 38.2475 44.6045C37.183 45.0635 35.9721 45.293 34.6146 45.293C33.267 45.293 32.0512 45.0635 30.9672 44.6045C29.893 44.1357 29.0385 43.4473 28.4037 42.5391C27.7787 41.6211 27.4662 40.498 27.4662 39.1699C27.4662 38.2812 27.642 37.4756 27.9936 36.7529C28.3549 36.0303 28.8529 35.4102 29.4877 34.8926C30.1225 34.3652 30.8744 33.9648 31.7436 33.6914C32.6127 33.4082 33.56 33.2666 34.5854 33.2666C35.9525 33.2666 37.1732 33.5156 38.2475 34.0137C39.3314 34.502 40.1811 35.1904 40.7963 36.0791C41.4115 36.958 41.7191 37.9883 41.7191 39.1699ZM37.8227 38.9355C37.8227 38.252 37.6859 37.6611 37.4125 37.1631C37.1488 36.6553 36.7729 36.2646 36.2846 35.9912C35.7963 35.7178 35.2299 35.5811 34.5854 35.5811C33.9311 35.5811 33.3598 35.7178 32.8715 35.9912C32.393 36.2646 32.017 36.6553 31.7436 37.1631C31.4799 37.6611 31.348 38.252 31.348 38.9355C31.348 39.6289 31.4799 40.2246 31.7436 40.7227C32.017 41.2109 32.3979 41.5869 32.8861 41.8506C33.3744 42.1143 33.9506 42.2461 34.6146 42.2461C35.2787 42.2461 35.85 42.1143 36.3285 41.8506C36.807 41.5869 37.1732 41.2109 37.4271 40.7227C37.6908 40.2246 37.8227 39.6289 37.8227 38.9355ZM41.2504 29.2969C41.2504 30.3711 40.9672 31.3281 40.4008 32.168C39.8344 32.998 39.0482 33.6475 38.0424 34.1162C37.0463 34.585 35.9037 34.8193 34.6146 34.8193C33.3256 34.8193 32.1732 34.585 31.1576 34.1162C30.1518 33.6475 29.3607 32.998 28.7846 32.168C28.2182 31.3281 27.935 30.3711 27.935 29.2969C27.935 28.0273 28.223 26.9531 28.7992 26.0742C29.3754 25.1855 30.1615 24.5117 31.1576 24.0527C32.1635 23.5938 33.3061 23.3643 34.5854 23.3643C35.8842 23.3643 37.0365 23.5938 38.0424 24.0527C39.0482 24.5117 39.8344 25.1855 40.4008 26.0742C40.9672 26.9531 41.2504 28.0273 41.2504 29.2969ZM37.3832 29.458C37.3832 28.8525 37.2709 28.3252 37.0463 27.876C36.8217 27.417 36.4994 27.0605 36.0795 26.8066C35.6693 26.5527 35.1713 26.4258 34.5854 26.4258C34.0189 26.4258 33.5307 26.5479 33.1205 26.792C32.7104 27.0361 32.393 27.3877 32.1684 27.8467C31.9438 28.2959 31.8314 28.833 31.8314 29.458C31.8314 30.0732 31.9438 30.6104 32.1684 31.0693C32.393 31.5283 32.7104 31.8896 33.1205 32.1533C33.5404 32.4072 34.0385 32.5342 34.6146 32.5342C35.1908 32.5342 35.684 32.4072 36.0941 32.1533C36.5043 31.8896 36.8217 31.5283 37.0463 31.0693C37.2709 30.6104 37.3832 30.0732 37.3832 29.458Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_EIGHT_ICON;