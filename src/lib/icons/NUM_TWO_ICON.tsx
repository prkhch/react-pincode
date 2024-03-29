import React, { useState } from "react";
import { NUM_BUTTON_PROPS_PROPS } from "./../types/ButtonType.d";

const NUM_TWO_ICON = (props: NUM_BUTTON_PROPS_PROPS) => {
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
        d="M42.0121 41.9531V45H27.5688V42.3926L34.4975 34.9072C35.2201 34.0869 35.7914 33.374 36.2113 32.7686C36.6313 32.1631 36.9291 31.6162 37.1049 31.1279C37.2904 30.6299 37.3832 30.1562 37.3832 29.707C37.3832 29.0527 37.266 28.4814 37.0316 27.9932C36.7973 27.4951 36.4555 27.1094 36.0063 26.8359C35.5668 26.5625 35.0248 26.4258 34.3803 26.4258C33.6674 26.4258 33.057 26.5918 32.5492 26.9238C32.0512 27.2461 31.6703 27.6953 31.4066 28.2715C31.1527 28.8477 31.0258 29.5068 31.0258 30.249H27.1439C27.1439 28.9893 27.4369 27.8418 28.0229 26.8066C28.6088 25.7617 29.4486 24.9268 30.5424 24.3018C31.6361 23.6768 32.935 23.3643 34.4389 23.3643C35.9037 23.3643 37.1439 23.6084 38.1596 24.0967C39.1752 24.5752 39.9467 25.2588 40.474 26.1475C41.0014 27.0361 41.265 28.0957 41.265 29.3262C41.265 30.0098 41.1527 30.6836 40.9281 31.3477C40.7035 32.0117 40.3861 32.6709 39.976 33.3252C39.5756 33.9697 39.0971 34.624 38.5404 35.2881C37.9838 35.9521 37.3637 36.6309 36.6801 37.3242L32.5199 41.9531H42.0121Z"
        fill={props.props.styleNumberFontColor}
      />
    </svg>
  );
};

export default NUM_TWO_ICON;
