"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_THREE_ICON = props => {
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
    d: "M31.8021 32.6221H33.9848C34.7563 32.6221 35.391 32.4902 35.8891 32.2266C36.3969 31.9531 36.7729 31.582 37.017 31.1133C37.2709 30.6348 37.3979 30.083 37.3979 29.458C37.3979 28.8428 37.2855 28.3105 37.0609 27.8613C36.8363 27.4023 36.4945 27.0508 36.0355 26.8066C35.5863 26.5527 35.0102 26.4258 34.307 26.4258C33.7406 26.4258 33.2182 26.5381 32.7396 26.7627C32.2709 26.9873 31.8949 27.3096 31.6117 27.7295C31.3383 28.1396 31.2016 28.6328 31.2016 29.209H27.3197C27.3197 28.0566 27.6225 27.0459 28.2279 26.1768C28.8432 25.2979 29.6732 24.6094 30.7182 24.1113C31.7631 23.6133 32.9301 23.3643 34.2191 23.3643C35.6254 23.3643 36.8559 23.5986 37.9105 24.0674C38.975 24.5264 39.8002 25.2051 40.3861 26.1035C40.9818 27.002 41.2797 28.1152 41.2797 29.4434C41.2797 30.0781 41.1283 30.7129 40.8256 31.3477C40.5326 31.9727 40.098 32.5391 39.5219 33.0469C38.9555 33.5449 38.2572 33.9502 37.4271 34.2627C36.6068 34.5654 35.6645 34.7168 34.6 34.7168H31.8021V32.6221ZM31.8021 35.6104V33.5449H34.6C35.8012 33.5449 36.8412 33.6865 37.7201 33.9697C38.6088 34.2432 39.3412 34.6338 39.9174 35.1416C40.4936 35.6396 40.9184 36.2207 41.1918 36.8848C41.475 37.5488 41.6166 38.2617 41.6166 39.0234C41.6166 40.0195 41.4311 40.9082 41.06 41.6895C40.6889 42.4609 40.1664 43.1152 39.4926 43.6523C38.8285 44.1895 38.0473 44.5996 37.1488 44.8828C36.2504 45.1562 35.2787 45.293 34.2338 45.293C33.3256 45.293 32.4418 45.1709 31.5824 44.9268C30.7328 44.6729 29.9662 44.2969 29.2826 43.7988C28.599 43.291 28.057 42.6562 27.6566 41.8945C27.2563 41.123 27.0561 40.2295 27.0561 39.2139H30.9379C30.9379 39.7998 31.0795 40.3223 31.3627 40.7812C31.6557 41.2402 32.0561 41.6016 32.5639 41.8652C33.0814 42.1191 33.6625 42.2461 34.307 42.2461C35.0199 42.2461 35.6303 42.1191 36.1381 41.8652C36.6557 41.6016 37.0512 41.2305 37.3246 40.752C37.598 40.2637 37.7348 39.6826 37.7348 39.0088C37.7348 38.208 37.5834 37.5586 37.2807 37.0605C36.9779 36.5625 36.5434 36.1963 35.977 35.9619C35.4203 35.7275 34.7563 35.6104 33.9848 35.6104H31.8021Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_THREE_ICON;