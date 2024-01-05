import React, { useState } from "react";

const NUM_ONE_ICON = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="keypadIcon"
      onClick={() => props.props.pushNumber()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle
        cx="35"
        cy="35"
        r="35"
        fill={
          isHovered
            ? props.props.styleHoverColor
            : props.props.styleNumberButtonColor
        }
      />
      <path
        d="M37.5297 23.6133V45H33.6479V28.1396L28.5063 29.8389V26.7041L37.0902 23.6133H37.5297Z"
        fill={props.props.styleNumberFontColor}
      />
    </svg>
  );
};

export default NUM_ONE_ICON;
