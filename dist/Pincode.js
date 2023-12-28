"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./style.css");
var _MINIMIZE_ICON = _interopRequireDefault(require("./icons/MINIMIZE_ICON.svg"));
var _NumberIcon = _interopRequireDefault(require("./NumberIcon"));
var _ResetIcon = _interopRequireDefault(require("./ResetIcon"));
var _DeleteIcon = _interopRequireDefault(require("./DeleteIcon"));
var _CircleIcon = _interopRequireDefault(require("./CircleIcon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Pincode = _ref => {
  let {
    onComplete,
    randomKeypad,
    maxLength,
    defaultMessage,
    styleBottomLayout,
    styleBackgroundColor,
    styleMessageColor,
    styleErrorMessageColor,
    styleInputCircleColor,
    styleNumberButtonColor,
    styleResetButtonColor,
    styleDeleteButtonColor
  } = _ref;
  const maxLengthValue = maxLength ? maxLength > 8 ? 8 : maxLength < 4 ? 4 : maxLength : 4;
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
    if (inputValue.length === maxLengthValue) {
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
  const circle_empty_arr = [...Array(maxLengthValue - inputValue.length)];
  const circle_fill_arr = [...Array(inputValue.length)];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container fadeIn",
    style: {
      backgroundColor: styleBackgroundColor
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
    className: styleBottomLayout ? "inputBox bottom" : "inputBox"
  }, circle_fill_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement(_CircleIcon.default, {
    key: idx,
    className: "",
    iconColor: styleInputCircleColor
  })), circle_empty_arr.map((_, idx) => /*#__PURE__*/_react.default.createElement("img", {
    key: idx,
    src: _MINIMIZE_ICON.default,
    alt: "Circle",
    className: ""
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadBox"
  }, !styleBottomLayout && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["one"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["one"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["two"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["two"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["three"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["three"].value,
    numberButtonColor: styleNumberButtonColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["four"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["four"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["five"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["five"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["six"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["six"].value,
    numberButtonColor: styleNumberButtonColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["seven"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["seven"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["eight"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["eight"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["nine"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["nine"].value,
    numberButtonColor: styleNumberButtonColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRow"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => resetInputValue()
  }, /*#__PURE__*/_react.default.createElement(_ResetIcon.default, {
    resetInputValue: () => resetInputValue(),
    resetButtonColor: styleResetButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => pushNumber(keypadMap["zero"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["zero"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem",
    onClick: () => popNumber()
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    popNumber: () => {},
    deleteButtonColor: styleDeleteButtonColor
  })))), styleBottomLayout && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRowBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["one"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["one"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["two"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["two"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["three"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["three"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["four"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["four"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["five"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["five"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => resetInputValue()
  }, /*#__PURE__*/_react.default.createElement(_ResetIcon.default, {
    resetInputValue: () => {},
    resetButtonColor: styleResetButtonColor
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadRowBottom"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["six"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["six"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["seven"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["seven"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["eight"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["eight"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["nine"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["nine"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => pushNumber(keypadMap["zero"].value)
  }, /*#__PURE__*/_react.default.createElement(_NumberIcon.default, {
    pushNumber: () => {},
    value: keypadMap["zero"].value,
    numberButtonColor: styleNumberButtonColor
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "keypadItem bottom",
    onClick: () => popNumber()
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    popNumber: () => {},
    deleteButtonColor: styleDeleteButtonColor
  }))))));
};
var _default = exports.default = Pincode;