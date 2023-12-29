import React from "react";
import "./style.css";
import { ReactComponent as FUNC_RESET_ICON } from "./icons/bottom/FUNC_RESET_ICON.svg";

const ResetIcon = (props) => {
  return (
    <FUNC_RESET_ICON
      className="funcIcon"
      onClick={() => props.resetInputValue()}
      fill={props.resetButtonColor}
    ></FUNC_RESET_ICON>
  );
};

export default ResetIcon;
