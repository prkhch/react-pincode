import React, { useEffect, useState } from "react";
import "./style.css";

const MAX_LENGTH = 6;

export const Pincode = ({ onComplete, randomKeypad, styleBottomLayout }) => {
  // error message

  // keypad map
  const [keypadMap, setKeypadMap] = useState({
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
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
    console.log(inputValue);
    onComplete({ inputValue: inputValue });
  }, [inputValue]);

  // Fishcer-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // randomKeypad
  let randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const keysArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const handleRandomKeypad = () => {
    shuffle(randomArray);
    const newKeypadMap = {};
    keysArray.forEach((key, index) => {
      newKeypadMap[key] = randomArray[index];
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
      <div className="inputBox">{inputValue}</div>

      <div className="keypadBox">
        {!styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div onClick={() => pushNumber(keypadMap["one"])}>{keypadMap["one"]}</div>
              <div onClick={() => pushNumber(keypadMap["two"])}>{keypadMap["two"]}</div>
              <div onClick={() => pushNumber(keypadMap["three"])}>{keypadMap["three"]}</div>
            </div>
            <div className="keypadRow">
              <div onClick={() => pushNumber(keypadMap["four"])}>{keypadMap["four"]}</div>
              <div onClick={() => pushNumber(keypadMap["five"])}>{keypadMap["five"]}</div>
              <div onClick={() => pushNumber(keypadMap["six"])}>{keypadMap["six"]}</div>
            </div>
            <div className="keypadRow">
              <div onClick={() => pushNumber(keypadMap["seven"])}>{keypadMap["seven"]}</div>
              <div onClick={() => pushNumber(keypadMap["eight"])}>{keypadMap["eight"]}</div>
              <div onClick={() => pushNumber(keypadMap["nine"])}>{keypadMap["nine"]}</div>
            </div>
            <div className="keypadRow">
              <div onClick={() => resetInputValue()}>0</div>
              <div onClick={() => pushNumber(keypadMap["zero"])}>{keypadMap["zero"]}</div>
              <div onClick={() => popNumber()}>0</div>
            </div>
          </>
        )}

        {styleBottomLayout && (
          <>
            <div className="keypadRow">
              <div onClick={() => pushNumber(keypadMap["one"])}>{keypadMap["one"]}</div>
              <div onClick={() => pushNumber(keypadMap["two"])}>{keypadMap["two"]}</div>
              <div onClick={() => pushNumber(keypadMap["three"])}>{keypadMap["three"]}</div>
              <div onClick={() => pushNumber(keypadMap["four"])}>{keypadMap["four"]}</div>
              <div onClick={() => pushNumber(keypadMap["five"])}>{keypadMap["five"]}</div>
              <div onClick={() => resetInputValue()}>0</div>
            </div>
            <div className="keypadRow">
              <div onClick={() => pushNumber(keypadMap["six"])}>{keypadMap["six"]}</div>
              <div onClick={() => pushNumber(keypadMap["seven"])}>{keypadMap["seven"]}</div>
              <div onClick={() => pushNumber(keypadMap["eight"])}>{keypadMap["eight"]}</div>
              <div onClick={() => pushNumber(keypadMap["nine"])}>{keypadMap["nine"]}</div>
              <div onClick={() => pushNumber(keypadMap["zero"])}>{keypadMap["zero"]}</div>
              <div onClick={() => popNumber()}>0</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
