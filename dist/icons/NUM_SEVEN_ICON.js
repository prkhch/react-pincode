"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_SEVEN_ICON = props => {
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
    d: "M41.8949 23.6719V25.7812L33.516 45H29.4291L37.808 26.7188H26.9682V23.6719H41.8949Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_SEVEN_ICON;