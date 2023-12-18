"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
var _RESET_ICON = _interopRequireDefault(require("./icons/RESET_ICON.svg"));
var _DELETE_ICON = _interopRequireDefault(require("./icons/DELETE_ICON.svg"));
var _ZERO_ICON = _interopRequireDefault(require("./icons/ZERO_ICON.svg"));
var _ONE_ICON = _interopRequireDefault(require("./icons/ONE_ICON.svg"));
var _TWO_ICON = _interopRequireDefault(require("./icons/TWO_ICON.svg"));
var _THREE_ICON = _interopRequireDefault(require("./icons/THREE_ICON.svg"));
var _FOUR_ICON = _interopRequireDefault(require("./icons/FOUR_ICON.svg"));
var _FIVE_ICON = _interopRequireDefault(require("./icons/FIVE_ICON.svg"));
var _SIX_ICON = _interopRequireDefault(require("./icons/SIX_ICON.svg"));
var _SEVEN_ICON = _interopRequireDefault(require("./icons/SEVEN_ICON.svg"));
var _EIGHT_ICON = _interopRequireDefault(require("./icons/EIGHT_ICON.svg"));
var _NINE_ICON = _interopRequireDefault(require("./icons/NINE_ICON.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Pincode = _ref => {
  let {
    onComplete,
    randomKeypad,
    maxLength,
    styleBottomLayout
  } = _ref;
  const maxLengthValue = maxLength ? Math.min(maxLength, 8) : 4;
  // error message

  // keypad map
  const [keypadMap, setKeypadMap] = (0, _react.useState)({
    zero: {
      value: 0,
      icon: _ZERO_ICON.default
    },
    one: {
      value: 1,
      icon: _ONE_ICON.default
    },
    two: {
      value: 2,
      icon: _TWO_ICON.default
    },
    three: {
      value: 3,
      icon: _THREE_ICON.default
    },
    four: {
      value: 4,
      icon: _FOUR_ICON.default
    },
    five: {
      value: 5,
      icon: _FIVE_ICON.default
    },
    six: {
      value: 6,
      icon: _SIX_ICON.default
    },
    seven: {
      value: 7,
      icon: _SEVEN_ICON.default
    },
    eight: {
      value: 8,
      icon: _EIGHT_ICON.default
    },
    nine: {
      value: 9,
      icon: _NINE_ICON.default
    }
  });

  // input value
  const [inputValue, setInputValue] = (0, _react.useState)("");

  // push number
  const pushNumber = number => {
    setInputValue(prev => prev + number);
  };

  // pop number
  const popNumber = () => {
    setInputValue(prev => prev.slice(0, -1));
  };

  // reset inputValue
  const resetInputValue = () => {
    setInputValue("");
    if (randomKeypad) handleRandomKeypad();
  };

  // on complete
  (0, _react.useEffect)(() => {
    // 핀코드가 MAX_LENGTH에 도달했는지 확인
    if (inputValue.length === maxLengthValue) {
      onComplete({
        inputValue: inputValue
      });
      resetInputValue();
    }
  }, [inputValue]);

  // Fishcer-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // randomKeypad
  // let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomArray = [{
    value: 0,
    icon: _ZERO_ICON.default
  }, {
    value: 1,
    icon: _ONE_ICON.default
  }, {
    value: 2,
    icon: _TWO_ICON.default
  }, {
    value: 3,
    icon: _THREE_ICON.default
  }, {
    value: 4,
    icon: _FOUR_ICON.default
  }, {
    value: 5,
    icon: _FIVE_ICON.default
  }, {
    value: 6,
    icon: _SIX_ICON.default
  }, {
    value: 7,
    icon: _SEVEN_ICON.default
  }, {
    value: 8,
    icon: _EIGHT_ICON.default
  }, {
    value: 9,
    icon: _NINE_ICON.default
  }];
  const keysArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const handleRandomKeypad = () => {
    shuffle(randomArray);
    const newKeypadMap = {
      ...keypadMap
    };
    keysArray.forEach((key, index) => {
      newKeypadMap[key].value = randomArray[index].value;
      newKeypadMap[key].icon = randomArray[index].icon;
    });
    setKeypadMap(newKeypadMap);
  };

  // randomKeypad == true
  (0, _react.useEffect)(() => {
    if (randomKeypad) {
      handleRandomKeypad();
    }
  }, []);

  // style

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: styleBottomLayout ? "inputBoxBottom" : "inputBox"
  }, inputValue ? "*".repeat(inputValue.length) + "□".repeat(maxLength - inputValue.length) : "□".repeat(maxLength)), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadBox"
  }, !styleBottomLayout && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["one"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["one"].icon,
    alt: "One"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["two"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["two"].icon,
    alt: "Two"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["three"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["three"].icon,
    alt: "Three"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["four"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["four"].icon,
    alt: "Four"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["five"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["five"].icon,
    alt: "Five"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["six"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["six"].icon,
    alt: "Six"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["seven"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["seven"].icon,
    alt: "Seven"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["eight"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["eight"].icon,
    alt: "Eight"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["nine"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["nine"].icon,
    alt: "Nine"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => resetInputValue()
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _RESET_ICON.default,
    alt: "Reset"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["zero"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["zero"].icon,
    alt: "Zero"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => popNumber()
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _DELETE_ICON.default,
    alt: "Delete"
  })))), styleBottomLayout && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["one"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["one"].icon,
    alt: "One"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["two"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["two"].icon,
    alt: "Two"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["three"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["three"].icon,
    alt: "Three"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["four"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["four"].icon,
    alt: "Four"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["five"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["five"].icon,
    alt: "Five"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => resetInputValue()
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _RESET_ICON.default,
    alt: "Reset"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["six"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["six"].icon,
    alt: "Six"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["seven"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["seven"].icon,
    alt: "Seven"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["eight"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["eight"].icon,
    alt: "Eight"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["nine"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["nine"].icon,
    alt: "Nine"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["zero"].value)
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: keypadMap["zero"].icon,
    alt: "Zero"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => popNumber()
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _DELETE_ICON.default,
    alt: "Delete"
  }))))));
};
var _default = exports.default = Pincode;