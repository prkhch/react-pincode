import React, { useState } from "react";
import { DEL_PROPS } from "../types/ButtonType";

const FUNC_DEL_ICON = (props: DEL_PROPS) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="funcIcon"
      onClick={() => props.popNumber()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <circle
        cx="35"
        cy="35"
        r="35"
        fill={isHovered ? props.styleHoverColor : "rgba(255,255,255,0)"}
      />
      <path
        d="M29.3333 43.4444C28.8704 43.4444 28.4363 43.3403 28.0313 43.1319C27.6262 42.9236 27.2963 42.6343 27.0417 42.2639L21 33.7222L27.0417 25.1806C27.2963 24.8102 27.6262 24.5208 28.0313 24.3125C28.4363 24.1042 28.8704 24 29.3333 24H43.2222C43.9861 24 44.64 24.272 45.184 24.816C45.728 25.36 46 26.0139 46 26.7778V40.6667C46 41.4306 45.728 42.0845 45.184 42.6285C44.64 43.1725 43.9861 43.4444 43.2222 43.4444H29.3333ZM29.3333 40.6667H43.2222V26.7778H29.3333L24.4028 33.7222L29.3333 40.6667ZM32.6667 39.2778L36.2778 35.6667L39.8889 39.2778L41.8333 37.3333L38.2222 33.7222L41.8333 30.1111L39.8889 28.1667L36.2778 31.7778L32.6667 28.1667L30.7222 30.1111L34.3333 33.7222L30.7222 37.3333L32.6667 39.2778Z"
        fill={props.deleteButtonColor}
      />
    </svg>
  );
};

export default FUNC_DEL_ICON;
