import React from "react";
import { ReactComponent as RESET_ICON } from "./icons/RESET_ICON.svg";

const ResetIcon = (props) => {
  return (
    <RESET_ICON
      onClick={() => props.resetInputValue()}
      fill={props.resetButtonColor}
    ></RESET_ICON>
  );
};

export default ResetIcon;
