import React from "react";
import "./style.css";
import { ReactComponent as CIRCLE_ICON } from "./icons/CIRCLE_ICON_FILL.svg";

const CircleIcon = (props) => {
  return (
    <CIRCLE_ICON fill={props.iconColor} className="circleFadeIn"></CIRCLE_ICON>
  );
};

export default CircleIcon;
