export interface ON_COMPLETE_PROPS {
  inputValue: string;
  setMessage: React.Dispatch<SetStateAction<string | undefined>>;
  setErrorMessage: React.Dispatch<SetStateAction<string | undefined>>;
}

export interface PINCODE_PROPS  {
  onComplete: (props : ON_COMPLETE_PROPS) => void;
  randomKeypad?: boolean;
  length?: number;
  defaultMessage?: string;
  styleBottomLayout?: boolean;
  styleBackgroundColor?: string;
  styleBackgroundOpacity?: number;
  styleMessageColor?: string;
  styleErrorMessageColor?: string;
  styleInputBoxColor?: string;
  styleInputCircleColor?: string;
  styleNumberFontColor?: string;
  styleNumberButtonColor?: string;
  styleResetButtonColor?: string;
  styleDeleteButtonColor?: string;
  styleHoverColor?: string;
  style?: React.CSSProperties;
}

export interface KEYPAD {
  zero: { value: string };
  one: { value: string };
  two: { value: string };
  three: { value: string };
  four: { value: string };
  five: { value: string };
  six: { value: string };
  seven: { value: string };
  eight: { value: string };
  nine: { value: string };
}