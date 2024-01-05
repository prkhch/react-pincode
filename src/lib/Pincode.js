import React, { useEffect, useState } from "react";
import "./style.css";
import INPUT_EMPTY_ICON from "./icons/INPUT_EMPTY_ICON";
import INPUT_FILL_ICON from "./icons/INPUT_FILL_ICON";
import NumberIcon from "./NumberIcon";
import FUNC_RESET_ICON from "./icons/FUNC_RESET_ICON";
import FUNC_DEL_ICON from "./icons/FUNC_DEL_ICON";

const Pincode = ({
  onComplete,
  randomKeypad,
  length,
  defaultMessage,
  styleBottomLayout,
  styleBackgroundColor,
  styleMessageColor,
  styleErrorMessageColor,
  styleInputBoxColor,
  styleInputCircleColor,
  styleNumberFontColor,
  styleNumberButtonColor,
  styleResetButtonColor,
  styleDeleteButtonColor,
  styleHoverColor,
}) => {
  const lengthValue = length ? (length > 8 ? 8 : length < 4 ? 4 : length) : 4;

  const [message, setMessage] = useState(defaultMessage);
  const [errorMessage, setErrorMessage] = useState("");

  // keypad map
  const [keypadMap, setKeypadMap] = useState({
    zero: { value: 0 },
    one: { value: 1 },
    two: { value: 2 },
    three: { value: 3 },
    four: { value: 4 },
    five: { value: 5 },
    six: { value: 6 },
    seven: { value: 7 },
    eight: { value: 8 },
    nine: { value: 9 },
  });

  // input value
  const [inputValue, setInputValue] = useState("");

  // push number
  const pushNumber = (number) => {
    setInputValue((prev) => prev + number);
    setErrorMessage("");
    setMessage(defaultMessage);
  };

  // pop number
  const popNumber = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  // reset inputValue
  const resetInputValue = () => {
    setInputValue("");
    if (randomKeypad) handleRandomKeypad();
  };

  // on complete
  useEffect(() => {
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
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // randomKeypad
  // let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let randomArray = [
    { value: 0 },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
  ];
  const keysArray = [
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
  const handleRandomKeypad = () => {
    shuffle(randomArray);
    const newKeypadMap = { ...keypadMap };
    keysArray.forEach((key, index) => {
      newKeypadMap[key].value = randomArray[index].value;
      newKeypadMap[key].icon = randomArray[index].icon;
    });
    setKeypadMap(newKeypadMap);
  };

  // randomKeypad == true
  useEffect(() => {
    if (randomKeypad) {
      handleRandomKeypad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const circle_empty_arr = [...Array(lengthValue - inputValue.length)];
  const circle_fill_arr = [...Array(inputValue.length)];

  return (
    <div
      className="container fadeIn"
      style={{ backgroundColor: styleBackgroundColor }}
    >
      {!errorMessage && (
        <div className="messageBox fadeIn" style={{ color: styleMessageColor }}>
          {message}
        </div>
      )}
      {errorMessage && (
        <div
          className="errorBox shake fadeIn"
          style={{ color: styleErrorMessageColor }}
        >
          {errorMessage}
        </div>
      )}

      <div className={styleBottomLayout ? "inputBox bottom" : "inputBox"}>
        {circle_fill_arr.map((_, idx) => (
          <INPUT_FILL_ICON
            key={idx}
            styleInputCircleColor={styleInputCircleColor}
            styleInputBoxColor={styleInputBoxColor}
          />
        ))}
        {circle_empty_arr.map((_, idx) => (
          <INPUT_EMPTY_ICON key={idx} styleInputBoxColor={styleInputBoxColor} />
        ))}
      </div>

      <div className="keypadBox">
        {!styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["one"].value)}
                  value={keypadMap["one"].value}
                  numberButtonColor={styleNumberButtonColor}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["two"].value)}
                  value={keypadMap["two"].value}
                  numberButtonColor={styleNumberButtonColor}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["three"].value)}
                  value={keypadMap["three"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["four"].value)}
                  value={keypadMap["four"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["five"].value)}
                  value={keypadMap["five"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["six"].value)}
                  value={keypadMap["six"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["seven"].value)}
                  value={keypadMap["seven"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["eight"].value)}
                  value={keypadMap["eight"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["nine"].value)}
                  value={keypadMap["nine"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <FUNC_RESET_ICON
                  resetInputValue={() => resetInputValue()}
                  resetButtonColor={styleResetButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["zero"].value)}
                  value={keypadMap["zero"].value}
                  styleNumberButtonColor={styleNumberButtonColor}
                  styleNumberFontColor={styleNumberFontColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
              <div className="keypadItem">
                <FUNC_DEL_ICON
                  popNumber={() => popNumber()}
                  deleteButtonColor={styleDeleteButtonColor}
                  styleHoverColor={styleHoverColor}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="keypadBoxBottom">
        {styleBottomLayout && (
          <>
            <div className="keypadRowBottom">
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["one"].value)}
              >
                <NumberIcon
                  value={keypadMap["one"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["two"].value)}
              >
                <NumberIcon
                  value={keypadMap["two"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["three"].value)}
              >
                <NumberIcon
                  value={keypadMap["three"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["four"].value)}
              >
                <NumberIcon
                  value={keypadMap["four"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["five"].value)}
              >
                <NumberIcon
                  value={keypadMap["five"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => resetInputValue()}
              >
                <FUNC_RESET_ICON
                  resetInputValue={() => {}}
                  resetButtonColor={styleResetButtonColor}
                  pushNumber={() => {}}
                />
              </div>
            </div>
            <div className="keypadRowBottom">
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["six"].value)}
              >
                <NumberIcon
                  value={keypadMap["six"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["seven"].value)}
              >
                <NumberIcon
                  value={keypadMap["seven"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["eight"].value)}
              >
                <NumberIcon
                  value={keypadMap["eight"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["nine"].value)}
              >
                <NumberIcon
                  value={keypadMap["nine"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["zero"].value)}
              >
                <NumberIcon
                  value={keypadMap["zero"].value}
                  styleNumberFontColor={styleNumberFontColor}
                  pushNumber={() => {}}
                />
              </div>
              <div className="keypadItem bottom" onClick={() => popNumber()}>
                <FUNC_DEL_ICON
                  popNumber={() => {}}
                  deleteButtonColor={styleDeleteButtonColor}
                  pushNumber={() => {}}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pincode;
