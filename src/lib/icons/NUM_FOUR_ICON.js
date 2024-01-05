import React, { useState } from "react";

const NUM_FOUR_ICON = (props) => {
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
      {props.props.styleNumberButtonColor && (
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
      )}
      <path
        d="M42.3783 37.2217V40.2686H27.0121L26.851 37.9248L35.8891 23.6719H38.9799L35.64 29.3408L30.7914 37.2217H42.3783ZM39.8441 23.6719V45H35.9623V23.6719H39.8441Z"
        fill={props.props.styleNumberFontColor}
      />
    </svg>
  );
};

export default NUM_FOUR_ICON;
