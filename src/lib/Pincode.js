import React, { useEffect, useState } from "react";
import "./style.css";
import INPUT_EMPTY_ICON from "./icons/INPUT_EMPTY_ICON.svg";
import NumberIcon from "./NumberIcon";
import NumberBottomIcon from "./NumberBottomIcon";
import ResetIcon from "./ResetIcon";
import ResetBottomIcon from "./ResetBottomIcon";
import DeleteIcon from "./DeleteIcon";
import DeleteBottomIcon from "./DeleteBottomIcon";
import CircleIcon from "./CircleIcon";

const Pincode = ({
  onComplete,
  randomKeypad,
  length,
  defaultMessage,
  styleBottomLayout,
  styleBackgroundColor,
  styleMessageColor,
  styleErrorMessageColor,
  styleInputCircleColor,
  styleNumberButtonColor,
  styleResetButtonColor,
  styleDeleteButtonColor,
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
          <CircleIcon
            key={idx}
            className=""
            iconColor={styleInputCircleColor}
          />
        ))}
        {circle_empty_arr.map((_, idx) => (
          <img key={idx} src={INPUT_EMPTY_ICON} alt="Circle" className="" />
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
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["two"].value)}
                  value={keypadMap["two"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["three"].value)}
                  value={keypadMap["three"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["four"].value)}
                  value={keypadMap["four"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["five"].value)}
                  value={keypadMap["five"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["six"].value)}
                  value={keypadMap["six"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["seven"].value)}
                  value={keypadMap["seven"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["eight"].value)}
                  value={keypadMap["eight"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["nine"].value)}
                  value={keypadMap["nine"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <ResetIcon
                  resetInputValue={() => resetInputValue()}
                  resetButtonColor={styleResetButtonColor}
                />
              </div>
              <div className="keypadItem">
                <NumberIcon
                  pushNumber={() => pushNumber(keypadMap["zero"].value)}
                  value={keypadMap["zero"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem">
                <DeleteIcon
                  popNumber={() => popNumber()}
                  deleteButtonColor={styleDeleteButtonColor}
                />
              </div>
            </div>
          </>
        )}

        {styleBottomLayout && (
          <>
            <div className="keypadRowBottom">
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["one"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["one"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["two"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["two"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["three"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["three"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["four"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["four"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["five"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["five"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => resetInputValue()}
              >
                <ResetBottomIcon
                  resetInputValue={() => {}}
                  resetButtonColor={styleResetButtonColor}
                />
              </div>
            </div>
            <div className="keypadRowBottom">
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["six"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["six"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["seven"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["seven"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["eight"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["eight"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["nine"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["nine"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div
                className="keypadItem bottom"
                onClick={() => pushNumber(keypadMap["zero"].value)}
              >
                <NumberBottomIcon
                  pushNumber={() => {}}
                  value={keypadMap["zero"].value}
                  numberButtonColor={styleNumberButtonColor}
                />
              </div>
              <div className="keypadItem bottom" onClick={() => popNumber()}>
                <DeleteBottomIcon
                  popNumber={() => {}}
                  deleteButtonColor={styleDeleteButtonColor}
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
