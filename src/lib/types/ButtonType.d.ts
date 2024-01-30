export interface NUM_BUTTON_PROPS  {
  pushNumber: () => void;
  value: string;
  styleNumberFontColor?: string;
  styleNumberButtonColor?: string;
  styleHoverColor?: string;
}

export interface NUM_BUTTON_PROPS_PROPS {
  props : NUM_BUTTON_PROPS;
}

export interface INPUT_PROPS {
  styleInputCircleColor? : string;
  styleInputBoxColor? : string;
}

export interface RESET_PROPS {
  resetInputValue: () => void;
  resetButtonColor? : string;
  styleHoverColor? : string;
}

export interface DEL_PROPS {
  popNumber: () => void;
  deleteButtonColor? : string;
  styleHoverColor? : string;
}