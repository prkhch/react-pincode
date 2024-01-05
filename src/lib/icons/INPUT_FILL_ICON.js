import React from "react";

const INPUT_FILL_ICON = (props) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="fadeIn"
  >
    <rect width="48" height="48" rx="6" fill="#F7F8F9" />
    <path
      d="M24 20.256C22.848 20.256 21.888 20.64 21.096 21.456C20.28 22.248 19.896 23.208 19.896 24.36C19.896 25.488 20.28 26.472 21.096 27.288C21.888 28.08 22.848 28.488 24 28.488C25.128 28.488 26.112 28.08 26.928 27.288C27.72 26.472 28.128 25.488 28.128 24.36C28.128 23.208 27.72 22.248 26.928 21.456C26.112 20.64 25.128 20.256 24 20.256Z"
      fill={props.styleInputCircleColor}
    />
  </svg>
);

export default INPUT_FILL_ICON;
