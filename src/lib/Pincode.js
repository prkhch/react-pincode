import React, { useEffect, useState } from "react";

const MAX_LENGTH = 6;

export const Pincode = ({ onComplete }) => {
  // error message

  // keypad map
  let keypadMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0,
  };

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
  };

  // on complete
  useEffect(() => {
    // 핀코드가 MAX_LENGTH에 도달했는지 확인
    console.log(inputValue);
    onComplete({ inputValue: inputValue });
  }, [inputValue]);

  // close
  const handleClose = () => {
    // 초기화
  };

  // style

  // random

  return (
    <div>
      <div onClick={() => pushNumber(keypadMap["one"])}>{keypadMap["one"]}</div>
      <div onClick={() => pushNumber(keypadMap["two"])}>{keypadMap["two"]}</div>
      <div onClick={() => pushNumber(keypadMap["three"])}>{keypadMap["three"]}</div>
      <div onClick={() => pushNumber(keypadMap["four"])}>{keypadMap["four"]}</div>
      <div onClick={() => pushNumber(keypadMap["five"])}>{keypadMap["five"]}</div>
      <div onClick={() => pushNumber(keypadMap["six"])}>{keypadMap["six"]}</div>
      <div onClick={() => pushNumber(keypadMap["seven"])}>{keypadMap["seven"]}</div>
      <div onClick={() => pushNumber(keypadMap["eight"])}>{keypadMap["eight"]}</div>
      <div onClick={() => pushNumber(keypadMap["nine"])}>{keypadMap["nine"]}</div>

      <div onClick={() => resetInputValue()}>@</div>
      <div onClick={() => pushNumber(keypadMap["zero"])}>{keypadMap["zero"]}</div>
      <div onClick={() => popNumber()}>x</div>
    </div>
  );
};
