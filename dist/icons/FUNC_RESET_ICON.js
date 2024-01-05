"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const FUNC_DEL_ICON = props => {
  const [isHovered, setIsHovered] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "funcIcon",
    onClick: () => props.resetInputValue(),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false)
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "35",
    cy: "35",
    r: "35",
    fill: isHovered ? props.styleHoverColor : "rgba(255,255,255,0)"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M36 45C39.0708 45 41.6719 43.9344 43.8031 41.8031C45.9344 39.6719 47 37.0708 47 34C47 30.9292 45.9344 28.3281 43.8031 26.1969C41.6719 24.0656 39.0708 23 36 23C34.4188 23 32.9062 23.3266 31.4625 23.9797C30.0187 24.6328 28.7812 25.5667 27.75 26.7812V23H25V32.625H34.625V29.875H28.85C29.5833 28.5917 30.5859 27.5833 31.8578 26.85C33.1297 26.1167 34.5104 25.75 36 25.75C38.2917 25.75 40.2396 26.5521 41.8438 28.1562C43.4479 29.7604 44.25 31.7083 44.25 34C44.25 36.2917 43.4479 38.2396 41.8438 39.8438C40.2396 41.4479 38.2917 42.25 36 42.25C34.2354 42.25 32.6427 41.7458 31.2219 40.7375C29.801 39.7292 28.8042 38.4 28.2312 36.75H25.3438C25.9854 39.1792 27.2917 41.1615 29.2625 42.6969C31.2333 44.2323 33.4792 45 36 45Z",
    fill: props.resetButtonColor
  }));
};
var _default = exports.default = FUNC_DEL_ICON;