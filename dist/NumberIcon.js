import { jsx as _jsx } from "react/jsx-runtime";
import "./style.css";
import NUM_ZERO_ICON from "./icons/NUM_ZERO_ICON";
import NUM_ONE_ICON from "./icons/NUM_ONE_ICON";
import NUM_TWO_ICON from "./icons/NUM_TWO_ICON";
import NUM_THREE_ICON from "./icons/NUM_THREE_ICON";
import NUM_FOUR_ICON from "./icons/NUM_FOUR_ICON";
import NUM_FIVE_ICON from "./icons/NUM_FIVE_ICON";
import NUM_SIX_ICON from "./icons/NUM_SIX_ICON";
import NUM_SEVEN_ICON from "./icons/NUM_SEVEN_ICON";
import NUM_EIGHT_ICON from "./icons/NUM_EIGHT_ICON";
import NUM_NINE_ICON from "./icons/NUM_NINE_ICON";
var NumberIcon = function (props) {
    if (props.value === "0") {
        return _jsx(NUM_ZERO_ICON, { props: props });
    }
    if (props.value === "1") {
        return _jsx(NUM_ONE_ICON, { props: props });
    }
    if (props.value === "2") {
        return _jsx(NUM_TWO_ICON, { props: props });
    }
    if (props.value === "3") {
        return _jsx(NUM_THREE_ICON, { props: props });
    }
    if (props.value === "4") {
        return _jsx(NUM_FOUR_ICON, { props: props });
    }
    if (props.value === "5") {
        return _jsx(NUM_FIVE_ICON, { props: props });
    }
    if (props.value === "6") {
        return _jsx(NUM_SIX_ICON, { props: props });
    }
    if (props.value === "7") {
        return _jsx(NUM_SEVEN_ICON, { props: props });
    }
    if (props.value === "8") {
        return _jsx(NUM_EIGHT_ICON, { props: props });
    }
    if (props.value === "9") {
        return _jsx(NUM_NINE_ICON, { props: props });
    }
    return null;
};
export default NumberIcon;
