var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./style.css";
import INPUT_EMPTY_ICON from "./icons/INPUT_EMPTY_ICON";
import INPUT_FILL_ICON from "./icons/INPUT_FILL_ICON";
import NumberIcon from "./NumberIcon";
import FUNC_RESET_ICON from "./icons/FUNC_RESET_ICON";
import FUNC_DEL_ICON from "./icons/FUNC_DEL_ICON";
var Pincode = function (_a) {
    var onComplete = _a.onComplete, randomKeypad = _a.randomKeypad, length = _a.length, defaultMessage = _a.defaultMessage, styleBottomLayout = _a.styleBottomLayout, styleBackgroundColor = _a.styleBackgroundColor, styleBackgroundOpacity = _a.styleBackgroundOpacity, styleMessageColor = _a.styleMessageColor, styleErrorMessageColor = _a.styleErrorMessageColor, styleInputBoxColor = _a.styleInputBoxColor, styleInputCircleColor = _a.styleInputCircleColor, styleNumberFontColor = _a.styleNumberFontColor, styleNumberButtonColor = _a.styleNumberButtonColor, styleResetButtonColor = _a.styleResetButtonColor, styleDeleteButtonColor = _a.styleDeleteButtonColor, styleHoverColor = _a.styleHoverColor;
    var lengthValue = length ? (length > 8 ? 8 : length < 4 ? 4 : length) : 4;
    var _b = useState(defaultMessage), message = _b[0], setMessage = _b[1];
    var _c = useState(""), errorMessage = _c[0], setErrorMessage = _c[1];
    // keypad map
    var _d = useState({
        zero: { value: "0" },
        one: { value: "1" },
        two: { value: "2" },
        three: { value: "3" },
        four: { value: "4" },
        five: { value: "5" },
        six: { value: "6" },
        seven: { value: "7" },
        eight: { value: "8" },
        nine: { value: "9" },
    }), keypadMap = _d[0], setKeypadMap = _d[1];
    // input value
    var _e = useState(""), inputValue = _e[0], setInputValue = _e[1];
    // push number
    var pushNumber = function (number) {
        setInputValue(function (prev) { return prev + number; });
        setErrorMessage("");
        setMessage(defaultMessage);
    };
    // pop number
    var popNumber = function () {
        setInputValue(function (prev) { return prev.slice(0, -1); });
    };
    // reset inputValue
    var resetInputValue = function () {
        setInputValue("");
        if (randomKeypad)
            handleRandomKeypad();
    };
    // on complete
    useEffect(function () {
        // 핀코드가 MAX_LENGTH에 도달했는지 확인
        if (inputValue.length === lengthValue) {
            onComplete({
                inputValue: inputValue,
                setMessage: setMessage,
                setErrorMessage: setErrorMessage,
            });
            resetInputValue();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);
    // Fishcer-Yates shuffle
    function shuffle(array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    }
    // randomKeypad
    // let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var randomArray = [
        { value: "0" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "7" },
        { value: "8" },
        { value: "9" },
    ];
    var keysArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    var handleRandomKeypad = function () {
        shuffle(randomArray);
        var newKeypadMap = __assign({}, keypadMap);
        keysArray.forEach(function (key, index) {
            newKeypadMap[key].value = randomArray[index].value;
        });
        setKeypadMap(newKeypadMap);
    };
    // randomKeypad == true
    useEffect(function () {
        if (randomKeypad) {
            handleRandomKeypad();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // input box
    var circle_empty_arr = __spreadArray([], Array(lengthValue - inputValue.length), true);
    var circle_fill_arr = __spreadArray([], Array(inputValue.length), true);
    // bottom layout hover
    var _f = useState(false), HoverOne = _f[0], setHoverOne = _f[1];
    var _g = useState(false), HoverTwo = _g[0], setHoverTwo = _g[1];
    var _h = useState(false), HoverThree = _h[0], setHoverThree = _h[1];
    var _j = useState(false), HoverFour = _j[0], setHoverFour = _j[1];
    var _k = useState(false), HoverFive = _k[0], setHoverFive = _k[1];
    var _l = useState(false), HoverSix = _l[0], setHoverSix = _l[1];
    var _m = useState(false), HoverSeven = _m[0], setHoverSeven = _m[1];
    var _o = useState(false), HoverEight = _o[0], setHoverEight = _o[1];
    var _p = useState(false), HoverNine = _p[0], setHoverNine = _p[1];
    var _q = useState(false), HoverZero = _q[0], setHoverZero = _q[1];
    var _r = useState(false), HoverRe = _r[0], setHoverRe = _r[1];
    var _s = useState(false), HoverDel = _s[0], setHoverDel = _s[1];
    return (_jsxs(_Fragment, { children: [!styleBottomLayout && (_jsxs("div", __assign({ className: "container bottom fadeIn", style: {
                    backgroundColor: styleBackgroundColor,
                    opacity: styleBackgroundOpacity,
                } }, { children: [!errorMessage && (_jsx("div", __assign({ className: "messageBox fadeIn", style: { color: styleMessageColor } }, { children: message }))), errorMessage && (_jsx("div", __assign({ className: "errorBox shake fadeIn", style: { color: styleErrorMessageColor } }, { children: errorMessage }))), _jsxs("div", __assign({ className: "inputBox" }, { children: [circle_fill_arr.map(function (_, idx) { return (_jsx(INPUT_FILL_ICON, { styleInputCircleColor: styleInputCircleColor, styleInputBoxColor: styleInputBoxColor }, idx)); }), circle_empty_arr.map(function (_, idx) { return (_jsx(INPUT_EMPTY_ICON, { styleInputBoxColor: styleInputBoxColor }, idx)); })] })), _jsxs("div", __assign({ className: "keypadBox" }, { children: [_jsxs("div", __assign({ className: "keypadRow" }, { children: [_jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["one"].value); }, value: keypadMap["one"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["two"].value); }, value: keypadMap["two"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["three"].value); }, value: keypadMap["three"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) }))] })), _jsxs("div", __assign({ className: "keypadRow" }, { children: [_jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["four"].value); }, value: keypadMap["four"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["five"].value); }, value: keypadMap["five"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["six"].value); }, value: keypadMap["six"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) }))] })), _jsxs("div", __assign({ className: "keypadRow" }, { children: [_jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["seven"].value); }, value: keypadMap["seven"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["eight"].value); }, value: keypadMap["eight"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["nine"].value); }, value: keypadMap["nine"].value, styleNumberFontColor: styleNumberFontColor, styleNumberButtonColor: styleNumberButtonColor, styleHoverColor: styleHoverColor }) }))] })), _jsxs("div", __assign({ className: "keypadRow" }, { children: [_jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(FUNC_RESET_ICON, { resetInputValue: function () { return resetInputValue(); }, resetButtonColor: styleResetButtonColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(NumberIcon, { pushNumber: function () { return pushNumber(keypadMap["zero"].value); }, value: keypadMap["zero"].value, styleNumberButtonColor: styleNumberButtonColor, styleNumberFontColor: styleNumberFontColor, styleHoverColor: styleHoverColor }) })), _jsx("div", __assign({ className: "keypadItem" }, { children: _jsx(FUNC_DEL_ICON, { popNumber: function () { return popNumber(); }, deleteButtonColor: styleDeleteButtonColor, styleHoverColor: styleHoverColor }) }))] }))] }))] }))), styleBottomLayout && (_jsxs("div", __assign({ className: "containerBottom fadeIn", style: {
                    backgroundColor: styleBackgroundColor,
                    opacity: styleBackgroundOpacity,
                } }, { children: [!errorMessage && (_jsx("div", __assign({ className: "messageBoxBottom fadeIn", style: { color: styleMessageColor } }, { children: message }))), errorMessage && (_jsx("div", __assign({ className: "errorBoxBottom shake fadeIn", style: { color: styleErrorMessageColor } }, { children: errorMessage }))), _jsxs("div", __assign({ className: "inputBox" }, { children: [circle_fill_arr.map(function (_, idx) { return (_jsx(INPUT_FILL_ICON, { styleInputCircleColor: styleInputCircleColor, styleInputBoxColor: styleInputBoxColor }, idx)); }), circle_empty_arr.map(function (_, idx) { return (_jsx(INPUT_EMPTY_ICON, { styleInputBoxColor: styleInputBoxColor }, idx)); })] })), _jsxs("div", __assign({ className: "keypadBoxBottom" }, { children: [_jsxs("div", __assign({ className: "keypadRowBottom" }, { children: [_jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["one"].value); }, onMouseEnter: function () { return setHoverOne(true); }, onMouseLeave: function () { return setHoverOne(false); }, style: HoverOne ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["one"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["two"].value); }, onMouseEnter: function () { return setHoverTwo(true); }, onMouseLeave: function () { return setHoverTwo(false); }, style: HoverTwo ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["two"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["three"].value); }, onMouseEnter: function () { return setHoverThree(true); }, onMouseLeave: function () { return setHoverThree(false); }, style: HoverThree ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["three"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["four"].value); }, onMouseEnter: function () { return setHoverFour(true); }, onMouseLeave: function () { return setHoverFour(false); }, style: HoverFour ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["four"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["five"].value); }, onMouseEnter: function () { return setHoverFive(true); }, onMouseLeave: function () { return setHoverFive(false); }, style: HoverFive ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["five"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return resetInputValue(); }, onMouseEnter: function () { return setHoverRe(true); }, onMouseLeave: function () { return setHoverRe(false); }, style: HoverRe ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(FUNC_RESET_ICON, { resetInputValue: function () { }, resetButtonColor: styleResetButtonColor }) }))] })), _jsxs("div", __assign({ className: "keypadRowBottom" }, { children: [_jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["six"].value); }, onMouseEnter: function () { return setHoverSix(true); }, onMouseLeave: function () { return setHoverSix(false); }, style: HoverSix ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["six"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["seven"].value); }, onMouseEnter: function () { return setHoverSeven(true); }, onMouseLeave: function () { return setHoverSeven(false); }, style: HoverSeven ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["seven"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["eight"].value); }, onMouseEnter: function () { return setHoverEight(true); }, onMouseLeave: function () { return setHoverEight(false); }, style: HoverEight ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["eight"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["nine"].value); }, onMouseEnter: function () { return setHoverNine(true); }, onMouseLeave: function () { return setHoverNine(false); }, style: HoverNine ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["nine"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return pushNumber(keypadMap["zero"].value); }, onMouseEnter: function () { return setHoverZero(true); }, onMouseLeave: function () { return setHoverZero(false); }, style: HoverZero ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(NumberIcon, { value: keypadMap["zero"].value, styleNumberFontColor: styleNumberFontColor, pushNumber: function () { } }) })), _jsx("div", __assign({ className: "keypadItemBottom", onClick: function () { return popNumber(); }, onMouseEnter: function () { return setHoverDel(true); }, onMouseLeave: function () { return setHoverDel(false); }, style: HoverDel ? { backgroundColor: styleHoverColor } : {} }, { children: _jsx(FUNC_DEL_ICON, { popNumber: function () { }, deleteButtonColor: styleDeleteButtonColor }) }))] }))] }))] })))] }));
};
export default Pincode;
