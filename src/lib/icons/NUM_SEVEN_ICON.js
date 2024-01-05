import React from "react";

const SEVEN_ICON = (props) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="keypadIcon"
    onClick={() => props.props.pushNumber()} // 필요한 함수를 전달
  >
    <circle cx="35" cy="35" r="35" fill={props.props.styleNumberButtonColor} />
    <path
      d="M41.8949 23.6719V25.7812L33.516 45H29.4291L37.808 26.7188H26.9682V23.6719H41.8949Z"
      fill={props.props.styleNumberFontColor}
    />
  </svg>
);

export default SEVEN_ICON;
