"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_SIX_ICON = props => {
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
    d: "M38.3354 23.4961H38.8627V26.6162H38.6137C37.432 26.6162 36.392 26.7969 35.4936 27.1582C34.6049 27.5195 33.8627 28.0273 33.267 28.6816C32.6811 29.3262 32.2367 30.0928 31.934 30.9814C31.6313 31.8604 31.4799 32.8223 31.4799 33.8672V37.3242C31.4799 38.1348 31.5629 38.8477 31.7289 39.4629C31.9047 40.0684 32.1439 40.5811 32.4467 41.001C32.7592 41.4111 33.1205 41.7188 33.5307 41.9238C33.9506 42.1289 34.4096 42.2314 34.9076 42.2314C35.4057 42.2314 35.8549 42.1289 36.2553 41.9238C36.6557 41.7188 36.9975 41.4307 37.2807 41.0596C37.5736 40.6787 37.7934 40.2344 37.9398 39.7266C38.0961 39.2188 38.1742 38.6621 38.1742 38.0566C38.1742 37.4609 38.101 36.9092 37.9545 36.4014C37.808 35.8936 37.5932 35.4492 37.31 35.0684C37.0268 34.6777 36.6752 34.3799 36.2553 34.1748C35.8451 33.96 35.3764 33.8525 34.849 33.8525C34.1654 33.8525 33.5551 34.0137 33.018 34.3359C32.4809 34.6484 32.0561 35.0586 31.7436 35.5664C31.4311 36.0742 31.2602 36.6113 31.2309 37.1777L29.9271 36.5332C29.976 35.7031 30.1518 34.9414 30.4545 34.248C30.767 33.5547 31.182 32.9492 31.6996 32.4316C32.227 31.9141 32.8471 31.5137 33.56 31.2305C34.2826 30.9473 35.0834 30.8057 35.9623 30.8057C36.9779 30.8057 37.8666 31.001 38.6283 31.3916C39.39 31.7725 40.0199 32.2949 40.518 32.959C41.0258 33.623 41.4066 34.3896 41.6605 35.2588C41.9145 36.1182 42.0414 37.0264 42.0414 37.9834C42.0414 39.0088 41.8754 39.9658 41.5434 40.8545C41.2211 41.7432 40.7523 42.5195 40.1371 43.1836C39.5219 43.8477 38.7797 44.3652 37.9105 44.7363C37.0414 45.1074 36.0648 45.293 34.9809 45.293C33.8383 45.293 32.8129 45.0781 31.9047 44.6484C31.0063 44.2188 30.2348 43.623 29.5902 42.8613C28.9457 42.0996 28.4525 41.2109 28.1107 40.1953C27.7689 39.1797 27.598 38.0811 27.598 36.8994V35.3467C27.598 33.6768 27.8275 32.124 28.2865 30.6885C28.7455 29.2529 29.4242 27.998 30.3227 26.9238C31.2309 25.8398 32.3539 25 33.6918 24.4043C35.0297 23.7988 36.5775 23.4961 38.3354 23.4961Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_SIX_ICON;