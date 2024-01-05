"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_NINE_ICON = props => {
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
    d: "M30.4838 41.9971H30.7621C32.0219 41.9971 33.0863 41.8359 33.9555 41.5137C34.8344 41.1914 35.5424 40.7373 36.0795 40.1514C36.6264 39.5557 37.0219 38.8477 37.266 38.0273C37.5199 37.1973 37.6469 36.2793 37.6469 35.2734V31.4062C37.6469 30.5859 37.5639 29.8682 37.3979 29.2529C37.2318 28.6279 36.9975 28.1055 36.6947 27.6855C36.4018 27.2656 36.0551 26.9531 35.6547 26.748C35.2543 26.5332 34.8246 26.4258 34.3656 26.4258C33.8578 26.4258 33.4086 26.543 33.018 26.7773C32.6273 27.0117 32.2953 27.334 32.0219 27.7441C31.7582 28.1445 31.5531 28.6084 31.4066 29.1357C31.2699 29.6631 31.2016 30.2197 31.2016 30.8057C31.2016 31.3721 31.265 31.9141 31.392 32.4316C31.5287 32.9492 31.7289 33.4082 31.9926 33.8086C32.266 34.209 32.6078 34.5264 33.018 34.7607C33.4281 34.9854 33.9066 35.0977 34.4535 35.0977C34.9711 35.0977 35.4398 35 35.8598 34.8047C36.2895 34.5996 36.6605 34.3311 36.973 33.999C37.2855 33.6572 37.5248 33.2812 37.6908 32.8711C37.8666 32.4512 37.9643 32.0264 37.9838 31.5967L39.3461 32.1826C39.3461 32.8955 39.1947 33.5986 38.892 34.292C38.599 34.9854 38.184 35.6152 37.6469 36.1816C37.1195 36.7383 36.5043 37.1875 35.8012 37.5293C35.098 37.8613 34.3412 38.0273 33.5307 38.0273C32.5248 38.0273 31.6361 37.8418 30.8646 37.4707C30.0932 37.0996 29.4438 36.5869 28.9164 35.9326C28.3988 35.2686 28.0082 34.5068 27.7445 33.6475C27.4809 32.7783 27.349 31.8506 27.349 30.8643C27.349 29.8389 27.5102 28.877 27.8324 27.9785C28.1547 27.0703 28.6186 26.2744 29.224 25.5908C29.8393 24.8975 30.5814 24.3555 31.4506 23.9648C32.3197 23.5645 33.2963 23.3643 34.3803 23.3643C35.5033 23.3643 36.5043 23.584 37.3832 24.0234C38.2621 24.4629 39.0092 25.0732 39.6244 25.8545C40.2396 26.626 40.7084 27.5391 41.0307 28.5938C41.3627 29.6484 41.5287 30.8008 41.5287 32.0508V33.4131C41.5287 34.7314 41.3969 35.9814 41.1332 37.1631C40.8695 38.3447 40.4643 39.4238 39.9174 40.4004C39.3705 41.377 38.6723 42.2217 37.8227 42.9346C36.9828 43.6475 35.977 44.1992 34.8051 44.5898C33.643 44.9707 32.3148 45.1611 30.8207 45.1611H30.4838V41.9971Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_NINE_ICON;