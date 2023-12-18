import React, { useEffect, useState } from "react";
import "./style.css";
import RESET_ICON from "./icons/RESET_ICON.svg";
import DELETE_ICON from "./icons/DELETE_ICON.svg";
import ZERO_ICON from "./icons/ZERO_ICON.svg";
import ONE_ICON from "./icons/ONE_ICON.svg";
import TWO_ICON from "./icons/TWO_ICON.svg";
import THREE_ICON from "./icons/THREE_ICON.svg";
import FOUR_ICON from "./icons/FOUR_ICON.svg";
import FIVE_ICON from "./icons/FIVE_ICON.svg";
import SIX_ICON from "./icons/SIX_ICON.svg";
import SEVEN_ICON from "./icons/SEVEN_ICON.svg";
import EIGHT_ICON from "./icons/EIGHT_ICON.svg";
import NINE_ICON from "./icons/NINE_ICON.svg";

const Pincode = ({ onComplete, randomKeypad, maxLength, styleBottomLayout }) => {
  const maxLengthValue = maxLength ? Math.min(maxLength, 8) : 4;
  // error message

  // keypad map
  const [keypadMap, setKeypadMap] = useState({
    zero: { value: 0, icon: ZERO_ICON },
    one: { value: 1, icon: ONE_ICON },
    two: { value: 2, icon: TWO_ICON },
    three: { value: 3, icon: THREE_ICON },
    four: { value: 4, icon: FOUR_ICON },
    five: { value: 5, icon: FIVE_ICON },
    six: { value: 6, icon: SIX_ICON },
    seven: { value: 7, icon: SEVEN_ICON },
    eight: { value: 8, icon: EIGHT_ICON },
    nine: { value: 9, icon: NINE_ICON },
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
      onComplete({ inputValue: inputValue });
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
    { value: 0, icon: ZERO_ICON },
    { value: 1, icon: ONE_ICON },
    { value: 2, icon: TWO_ICON },
    { value: 3, icon: THREE_ICON },
    { value: 4, icon: FOUR_ICON },
    { value: 5, icon: FIVE_ICON },
    { value: 6, icon: SIX_ICON },
    { value: 7, icon: SEVEN_ICON },
    { value: 8, icon: EIGHT_ICON },
    { value: 9, icon: NINE_ICON },
  ];
  const keysArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
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

  return (
    <div className="container">
      <div className={styleBottomLayout ? "inputBoxBottom" : "inputBox"}>
        {inputValue ? "*".repeat(inputValue.length) + "□".repeat(maxLength - inputValue.length) : "□".repeat(maxLength)}
      </div>

      <div className="keypadBox">
        {!styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["one"].value)}>
                <img src={keypadMap["one"].icon} alt="One" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["two"].value)}>
                <img src={keypadMap["two"].icon} alt="Two" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["three"].value)}>
                <img src={keypadMap["three"].icon} alt="Three" />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["four"].value)}>
                <img src={keypadMap["four"].icon} alt="Four" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["five"].value)}>
                <img src={keypadMap["five"].icon} alt="Five" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["six"].value)}>
                <img src={keypadMap["six"].icon} alt="Six" />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["seven"].value)}>
                <img src={keypadMap["seven"].icon} alt="Seven" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["eight"].value)}>
                <img src={keypadMap["eight"].icon} alt="Eight" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["nine"].value)}>
                <img src={keypadMap["nine"].icon} alt="Nine" />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => resetInputValue()}>
                <img src={RESET_ICON} alt="Reset" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["zero"].value)}>
                <img src={keypadMap["zero"].icon} alt="Zero" />
              </div>
              <div className="keypadItem" onClick={() => popNumber()}>
                <img src={DELETE_ICON} alt="Delete" />
              </div>
            </div>
          </>
        )}

        {styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["one"].value)}>
                <img src={keypadMap["one"].icon} alt="One" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["two"].value)}>
                <img src={keypadMap["two"].icon} alt="Two" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["three"].value)}>
                <img src={keypadMap["three"].icon} alt="Three" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["four"].value)}>
                <img src={keypadMap["four"].icon} alt="Four" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["five"].value)}>
                <img src={keypadMap["five"].icon} alt="Five" />
              </div>
              <div className="keypadItem" onClick={() => resetInputValue()}>
                <img src={RESET_ICON} alt="Reset" />
              </div>
            </div>
            <div className="keypadRow">
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["six"].value)}>
                <img src={keypadMap["six"].icon} alt="Six" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["seven"].value)}>
                <img src={keypadMap["seven"].icon} alt="Seven" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["eight"].value)}>
                <img src={keypadMap["eight"].icon} alt="Eight" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["nine"].value)}>
                <img src={keypadMap["nine"].icon} alt="Nine" />
              </div>
              <div className="keypadItem" onClick={() => pushNumber(keypadMap["zero"].value)}>
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
