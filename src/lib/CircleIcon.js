import React from "react";
import "./style.css";
import { ReactComponent as INPUT_FILL_ICON } from "./icons/INPUT_FILL_ICON.svg";

const CircleIcon = (props) => {
  return (
    <INPUT_FILL_ICON
      fill={props.iconColor}
      className="fadeIn"
    ></INPUT_FILL_ICON>
  );
};

export default CircleIcon;
