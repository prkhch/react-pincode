import React from "react";
import { ReactComponent as DELETE_ICON } from "./icons/DELETE_ICON.svg";

const DeleteIcon = (props) => {
  return (
    <DELETE_ICON
      onClick={() => props.popNumber()}
      fill={props.deleteButtonColor}
    ></DELETE_ICON>
  );
};

export default DeleteIcon;
