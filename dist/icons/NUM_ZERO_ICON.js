"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const NUM_ZERO_ICON = props => {
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
    d: "M41.6898 32.5049V36.0938C41.6898 37.7344 41.5238 39.1357 41.1918 40.2979C40.8598 41.46 40.3813 42.4121 39.7563 43.1543C39.1313 43.8867 38.3842 44.4287 37.515 44.7803C36.6459 45.1221 35.6791 45.293 34.6146 45.293C33.765 45.293 32.974 45.1855 32.2416 44.9707C31.5092 44.7461 30.85 44.4043 30.2641 43.9453C29.6879 43.4766 29.1898 42.8809 28.7699 42.1582C28.3598 41.4355 28.0424 40.5713 27.8178 39.5654C27.6029 38.5596 27.4955 37.4023 27.4955 36.0938V32.5049C27.4955 30.8643 27.6615 29.4678 27.9936 28.3154C28.3354 27.1631 28.8188 26.2207 29.4438 25.4883C30.0688 24.7559 30.8158 24.2236 31.685 23.8916C32.5541 23.5498 33.5209 23.3789 34.5854 23.3789C35.4447 23.3789 36.2357 23.4863 36.9584 23.7012C37.6908 23.916 38.3451 24.2529 38.9213 24.7119C39.5072 25.1611 40.0053 25.7471 40.4154 26.4697C40.8256 27.1826 41.1381 28.042 41.3529 29.0479C41.5775 30.0439 41.6898 31.1963 41.6898 32.5049ZM37.8227 36.6211V31.9629C37.8227 31.1426 37.7738 30.4297 37.6762 29.8242C37.5883 29.209 37.4564 28.6865 37.2807 28.2568C37.1049 27.8271 36.8852 27.4805 36.6215 27.2168C36.3578 26.9434 36.0551 26.7432 35.7133 26.6162C35.3715 26.4893 34.9955 26.4258 34.5854 26.4258C34.0775 26.4258 33.6234 26.5283 33.223 26.7334C32.8227 26.9287 32.4857 27.2412 32.2123 27.6709C31.9389 28.1006 31.7289 28.6719 31.5824 29.3848C31.4457 30.0879 31.3773 30.9473 31.3773 31.9629V36.6211C31.3773 37.4414 31.4213 38.1592 31.5092 38.7744C31.6068 39.3896 31.7436 39.917 31.9193 40.3564C32.1049 40.7959 32.3246 41.1572 32.5785 41.4404C32.8422 41.7139 33.1449 41.9189 33.4867 42.0557C33.8285 42.1826 34.2045 42.2461 34.6146 42.2461C35.1322 42.2461 35.5863 42.1436 35.977 41.9385C36.3773 41.7334 36.7143 41.4111 36.9877 40.9717C37.2611 40.5225 37.4662 39.9414 37.6029 39.2285C37.7494 38.5059 37.8227 37.6367 37.8227 36.6211Z",
    fill: props.props.styleNumberFontColor
  }));
};
var _default = exports.default = NUM_ZERO_ICON;