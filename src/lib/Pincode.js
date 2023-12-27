import React, { useEffect, useState } from "react";
import "./style.css";
import CIRCLE_ICON from "./icons/CIRCLE_ICON.svg";
import CIRCLE_ICON_FILL from "./icons/CIRCLE_ICON_FILL.svg";
import MINIMIZE_ICON from "./icons/MINIMIZE_ICON.svg";
import NumberIcon from "./NumberIcon";
import ResetIcon from "./ResetIcon";
import DeleteIcon from "./DeleteIcon";

const Pincode = ({
  onComplete,
  randomKeypad,
  maxLength,
  styleBottomLayout,
  styleNumberButtonColor,
  styleResetButtonColor,
  styleDeleteButtonColor,
}) => {
  const maxLengthValue = maxLength
    ? maxLength > 8
      ? 8
      : maxLength < 4
      ? 4
      : maxLength
    : 4;

  const [message, setMessage] = useState("Enter Pincode");
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
    if (inputValue.length === maxLengthValue) {
      onComplete({
        inputValue: inputValue,
        setMessage: setMessage,
        setErrorMessage: setErrorMessage,
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
  }, []);

  // style

  const circle_empty_arr = [...Array(maxLengthValue - inputValue.length)];
  const circle_fill_arr = [...Array(inputValue.length)];

  return (
    <div className="container">
      {!errorMessage && <div className="">{message}</div>}
      {errorMessage && <div className="errorBox">{errorMessage}</div>}

      <div className={styleBottomLayout ? "inputBoxBottom" : "inputBox"}>
        {circle_fill_arr.map((_, idx) => (
          <img
            key={idx}
            src={CIRCLE_ICON_FILL}
            alt="CircleFill"
            className="circleFadeIn"
          />
        ))}
        {circle_empty_arr.map((_, idx) => (
          <img key={idx} src={MINIMIZE_ICON} alt="Circle" />
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
              <div className="keypadItem" onClick={() => resetInputValue()}>
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
                  pushNumber={() => popNumber()}
                  deleteButtonColor={styleDeleteButtonColor}
                />
              </div>
            </div>
          </>
        )}

        {styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div className="keypadItem">
                <img src={keypadMap["one"].icon} alt="One" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["two"].icon} alt="Two" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["three"].icon} alt="Three" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["four"].icon} alt="Four" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["five"].icon} alt="Five" />
              </div>
              <div className="keypadItem" onClick={() => resetInputValue()}>
                <img src={RESET_ICON} alt="Reset" />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem">
                <img src={keypadMap["six"].icon} alt="Six" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["seven"].icon} alt="Seven" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["eight"].icon} alt="Eight" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["nine"].icon} alt="Nine" />
              </div>
              <div className="keypadItem">
                <img src={keypadMap["zero"].icon} alt="Zero" />
              </div>
              <div className="keypadItem" onClick={() => popNumber()}>
                <img src={DELETE_ICON} alt="Delete" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pincode;
