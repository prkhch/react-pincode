import React from "react";
import "./style.css";
import { ReactComponent as ZERO_ICON } from "./icons/bottom/ZERO_ICON.svg";
import { ReactComponent as ONE_ICON } from "./icons/bottom/ONE_ICON.svg";
import { ReactComponent as TWO_ICON } from "./icons/bottom/TWO_ICON.svg";
import { ReactComponent as THREE_ICON } from "./icons/bottom/THREE_ICON.svg";
import { ReactComponent as FOUR_ICON } from "./icons/bottom/FOUR_ICON.svg";
import { ReactComponent as FIVE_ICON } from "./icons/bottom/FIVE_ICON.svg";
import { ReactComponent as SIX_ICON } from "./icons/bottom/SIX_ICON.svg";
import { ReactComponent as SEVEN_ICON } from "./icons/bottom/SEVEN_ICON.svg";
import { ReactComponent as EIGHT_ICON } from "./icons/bottom/EIGHT_ICON.svg";
import { ReactComponent as NINE_ICON } from "./icons/bottom/NINE_ICON.svg";

const NumberIcon = (props) => {
  if (props.value === 0) {
    return (
      <ZERO_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></ZERO_ICON>
    );
  }
  if (props.value === 1) {
    return (
      <ONE_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></ONE_ICON>
    );
  }
  if (props.value === 2) {
    return (
      <TWO_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></TWO_ICON>
    );
  }
  if (props.value === 3) {
    return (
      <THREE_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></THREE_ICON>
    );
  }
  if (props.value === 4) {
    return (
      <FOUR_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></FOUR_ICON>
    );
  }
  if (props.value === 5) {
    return (
      <FIVE_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></FIVE_ICON>
    );
  }
  if (props.value === 6) {
    return (
      <SIX_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></SIX_ICON>
    );
  }
  if (props.value === 7) {
    return (
      <SEVEN_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></SEVEN_ICON>
    );
  }
  if (props.value === 8) {
    return (
      <EIGHT_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></EIGHT_ICON>
    );
  }
  if (props.value === 9) {
    return (
      <NINE_ICON
        onClick={() => props.pushNumber()}
        fill={props.numberButtonColor}
      ></NINE_ICON>
    );
  }
};

export default NumberIcon;
