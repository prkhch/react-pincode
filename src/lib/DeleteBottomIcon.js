import React from "react";
import "./style.css";
import { ReactComponent as FUNC_DEL_ICON } from "./icons/bottom/FUNC_DEL_ICON.svg";

const DeleteBottomIcon = (props) => {
  return (
    <FUNC_DEL_ICON
      className="funcIcon"
      onClick={() => props.popNumber()}
      fill={props.deleteButtonColor}
    ></FUNC_DEL_ICON>
  );
};

export default DeleteBottomIcon;
