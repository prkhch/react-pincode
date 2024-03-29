import React from "react";
import { INPUT_PROPS } from "../types/ButtonType";

const INPUT_FILL_ICON = (props: INPUT_PROPS) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="6" fill={props.styleInputBoxColor} />
  </svg>
);

export default INPUT_FILL_ICON;
