"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
var _INPUT_EMPTY_ICON = _interopRequireDefault(require("./icons/INPUT_EMPTY_ICON"));
var _INPUT_FILL_ICON = _interopRequireDefault(require("./icons/INPUT_FILL_ICON"));
var _NumberIcon = _interopRequireDefault(require("./NumberIcon"));
var _FUNC_RESET_ICON = _interopRequireDefault(require("./icons/FUNC_RESET_ICON"));
var _FUNC_DEL_ICON = _interopRequireDefault(require("./icons/FUNC_DEL_ICON"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Pincode = _ref => {
  let {
    onComplete,
    randomKeypad,
    length,
    defaultMessage,
    styleBottomLayout,
    styleBackgroundColor,
    styleBackgroundOpacity,
    styleMessageColor,
    styleErrorMessageColor,
    styleInputBoxColor,
    styleInputCircleColor,
    styleNumberFontColor,
    styleNumberButtonColor,
    styleResetButtonColor,
    styleDeleteButtonColor,
    styleHoverColor
  } = _ref;
  const lengthValue = length ? length > 8 ? 8 : length < 4 ? 4 : length : 4;
  const [message, setMessage] = (0, _react.useState)(defaultMessage);
  const [errorMessage, setErrorMessage] = (0, _react.useState)("");

  // keypad map
  const [keypadMap, setKeypadMap] = (0, _react.useState)({
    zero: {
      value: 0
    },
    one: {
      value: 1
    },
    two: {
      value: 2
    },
    three: {
      value: 3
    },
    four: {
      value: 4
    },
    five: {
      value: 5
    },
    six: {
      value: 6
    },
    seven: {
      value: 7
    },
    eight: {
      value: 8
    },
    nine: {
      value: 9
    }
  });

  // input value
  const [inputValue, setInputValue] = (0, _react.useState)("");

  // push number
  const pushNumber = number => {
    setInputValue(prev => prev + number);
    setErrorMessage("");
    setMessage(defaultMessage);
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
    if (inputValue.length === lengthValue) {
      onComplete({
        inputValue: inputValue,
        setMessage: setMessage,
        setErrorMessage: setErrorMessage
      });
      resetInputValue();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    value: 0
  }, {
    value: 1
  }, {
    value: 2
  }, {
    value: 3
  }, {
    value: 4
  }, {
    value: 5
  }, {
    value: 6
  }, {
    value: 7
  }, {
    value: 8
  }, {
    value: 9
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // input box
  const circle_empty_arr = [...Array(lengthValue - inputValue.length)];
  const circle_fill_arr = [...Array(inputValue.length)];

  // bottom layout hover
  const [HoverOne, setHoverOne] = (0, _react.useState)(false);
  const [HoverTwo, setHoverTwo] = (0, _react.useState)(false);
  const [HoverThree, setHoverThree] = (0, _react.useState)(false);
  const [HoverFour, setHoverFour] = (0, _react.useState)(false);
  const [HoverFive, setHoverFive] = (0, _react.useState)(false);
  const [HoverSix, setHoverSix] = (0, _react.useState)(false);
  const [HoverSeven, setHoverSeven] = (0, _react.useState)(false);
  const [HoverEight, setHoverEight] = (0, _react.useState)(false);
  const [HoverNine, setHoverNine] = (0, _react.useState)(false);
  const [HoverZero, setHoverZero] = (0, _react.useState)(false);
  const [HoverRe, setHoverRe] = (0, _react.useState)(false);
  const [HoverDel, setHoverDel] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !styleBottomLayout && /*#__PURE__*/_react.default.createElement("div", {
    className: "container bottom fadeIn",
    style: {
      backgroundColor: styleBackgroundColor,
      opacity: styleBackgroundOpacity
    }
  }, !errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "messageBox fadeIn",
    style: {
      color: styleMessageColor
    }
  }, message), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "errorBox shake fadeIn",
    style: {
      color: styleErrorMessageColor
    }
  }, errorMessage), /*#__PURE__*/_react.default.createElement("div", {
    className: "inputBox"
  }, circle_fill_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement(_INPUT_FILL_ICON.default, {
    key: idx,
    styleInputCircleColor: styleInputCircleColor,
    styleInputBoxColor: styleInputBoxColor
  })), circle_empty_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement(_INPUT_EMPTY_ICON.default, {
    key: idx,
    styleInputBoxColor: styleInputBoxColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadBox"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["one"].value),
    value: keypadMap["one"].value,
    numberButtonColor: styleNumberButtonColor,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["two"].value),
    value: keypadMap["two"].value,
    numberButtonColor: styleNumberButtonColor,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["three"].value),
    value: keypadMap["three"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["four"].value),
    value: keypadMap["four"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["five"].value),
    value: keypadMap["five"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["six"].value),
    value: keypadMap["six"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["seven"].value),
    value: keypadMap["seven"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["eight"].value),
    value: keypadMap["eight"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["nine"].value),
    value: keypadMap["nine"].value,
    styleNumberFontColor: styleNumberFontColor,
    styleNumberButtonColor: styleNumberButtonColor,
    styleHoverColor: styleHoverColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_FUNC_RESET_ICON.default, {
    resetInputValue: () => resetInputValue(),
    resetButtonColor: styleResetButtonColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => pushNumber(keypadMap["zero"].value),
    value: keypadMap["zero"].value,
    styleNumberButtonColor: styleNumberButtonColor,
    styleNumberFontColor: styleNumberFontColor,
    styleHoverColor: styleHoverColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem"
  }, /*#__PURE__*/_react.default.createElement(_FUNC_DEL_ICON.default, {
    popNumber: () => popNumber(),
    deleteButtonColor: styleDeleteButtonColor,
    styleHoverColor: styleHoverColor
  }))))), styleBottomLayout && /*#__PURE__*/_react.default.createElement("div", {
    className: "containerBottom fadeIn",
    style: {
      backgroundColor: styleBackgroundColor,
      opacity: styleBackgroundOpacity
    }
  }, !errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "messageBoxBottom fadeIn",
    style: {
      color: styleMessageColor
    }
  }, message), errorMessage && /*#__PURE__*/_react.default.createElement("div", {
    className: "errorBoxBottom shake fadeIn",
    style: {
      color: styleErrorMessageColor
    }
  }, errorMessage), /*#__PURE__*/_react.default.createElement("div", {
    className: "inputBox"
  }, circle_fill_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement(_INPUT_FILL_ICON.default, {
    key: idx,
    styleInputCircleColor: styleInputCircleColor,
    styleInputBoxColor: styleInputBoxColor
  })), circle_empty_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement(_INPUT_EMPTY_ICON.default, {
    key: idx,
    styleInputBoxColor: styleInputBoxColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadBoxBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRowBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["one"].value),
    onMouseEnter: () => setHoverOne(true),
    onMouseLeave: () => setHoverOne(false),
    style: HoverOne ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["one"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["two"].value),
    onMouseEnter: () => setHoverTwo(true),
    onMouseLeave: () => setHoverTwo(false),
    style: HoverTwo ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["two"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["three"].value),
    onMouseEnter: () => setHoverThree(true),
    onMouseLeave: () => setHoverThree(false),
    style: HoverThree ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["three"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["four"].value),
    onMouseEnter: () => setHoverFour(true),
    onMouseLeave: () => setHoverFour(false),
    style: HoverFour ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["four"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["five"].value),
    onMouseEnter: () => setHoverFive(true),
    onMouseLeave: () => setHoverFive(false),
    style: HoverFive ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["five"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => resetInputValue(),
    onMouseEnter: () => setHoverRe(true),
    onMouseLeave: () => setHoverRe(false),
    style: HoverRe ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_FUNC_RESET_ICON.default, {
    resetInputValue: () => {},
    resetButtonColor: styleResetButtonColor,
    pushNumber: () => {}
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRowBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["six"].value),
    onMouseEnter: () => setHoverSix(true),
    onMouseLeave: () => setHoverSix(false),
    style: HoverSix ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["six"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["seven"].value),
    onMouseEnter: () => setHoverSeven(true),
    onMouseLeave: () => setHoverSeven(false),
    style: HoverSeven ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["seven"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["eight"].value),
    onMouseEnter: () => setHoverEight(true),
    onMouseLeave: () => setHoverEight(false),
    style: HoverEight ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["eight"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["nine"].value),
    onMouseEnter: () => setHoverNine(true),
    onMouseLeave: () => setHoverNine(false),
    style: HoverNine ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["nine"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => pushNumber(keypadMap["zero"].value),
    onMouseEnter: () => setHoverZero(true),
    onMouseLeave: () => setHoverZero(false),
    style: HoverZero ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    value: keypadMap["zero"].value,
    styleNumberFontColor: styleNumberFontColor,
    pushNumber: () => {}
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItemBottom",
    onClick: () => popNumber(),
    onMouseEnter: () => setHoverDel(true),
    onMouseLeave: () => setHoverDel(false),
    style: HoverDel ? {
      backgroundColor: styleHoverColor
    } : {}
  }, /*#__PURE__*/_react.default.createElement(_FUNC_DEL_ICON.default, {
    popNumber: () => {},
    deleteButtonColor: styleDeleteButtonColor,
    pushNumber: () => {}
  }))))));
};
var _default = exports.default = Pincode;