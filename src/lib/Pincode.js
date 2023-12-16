import React, { useEffect, useState } from "react";

const MAX_LENGTH = 6;

export const Pincode = ({ onComplete }) => {
  // error message

  // keypad map

  // input value
  const [inputValue, setInputValue] = useState("");

  // push number

  // pop number

  // reset inputValue

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
      <button onClick={() => setInputValue("1234")}>입력</button>
      <div></div>
    </div>
  );
};
