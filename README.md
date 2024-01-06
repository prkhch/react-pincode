## Quick Start
PIN code Component for React

```
npm install @prkhch/react-pincode
```

```
import { Pincode } from "@prkhch/react-pincode";

export interface ON_COMPLETE_PROPS {
  inputValue: string;
  setMessage: (value: string | undefined) => void;
  setErrorMessage: (value: string | undefined) => void;
}

function App() {
  const onComplete = ({ inputValue, setMessage, setErrorMessage }: ON_COMPLETE_PROPS) => {
    // Request correct password from the server.
    // Example correct password : 0000
    if (inputValue === "0000") {
      setMessage("Correct!");
      setErrorMessage("");
    }

    if (inputValue !== "0000") {
      setMessage("");
      setErrorMessage("InCorrect!");
    }
  };

  return (
    <div>
      <Pincode
        onComplete={onComplete}
        // randomKeypad={true}
        length={4}
        defaultMessage="Enter PIN"
        // styleBottomLayout={true}
        styleBackgroundColor="#ffffff"
        styleBackgroundOpacity={1}
        styleMessageColor="#000000"
        styleErrorMessageColor="#ff0000"
        styleInputBoxColor="#efefef"
        styleInputCircleColor="#000000"
        styleNumberFontColor="#000000"
        styleNumberButtonColor="#efefef"
        styleResetButtonColor="#000000"
        styleDeleteButtonColor="#000000"
        styleHoverColor="#bbbbbb"
        style={{ width: "100%", position: "fixed", top: 0, zIndex: 1 }}
      />
    </div>
  );
}

export default App;
```
## Options 
###### \* : Required
| Name              | Description                                  | Default            | Type    |
|-----------------------|----------------------------------------------|--------------------|---------|
| *`onComplete`         | Callback function when input is complete    | -                  | function |
| `randomKeypad`        | Randomizes the number pad                    | false           | boolean |
| `length`              | Length of the password                       | 4 (4~8)  | number  |
| `defaultMessage`      | Default message displayed                    | -                  | string  |
| `styleBottomLayout`   | Enable/disable bottom layout style           | false           | boolean |
| `styleBackgroundColor`| Background color of the component            | -                | string  |
| `styleBackgroundOpacity`| Opacity of the background            | 1 (0~1)               | number  |
| `styleMessageColor`   | Text color for the message                   | -                  | string  |
| `styleErrorMessageColor` | Text color for the error message          | -                  | string  |
| `styleInputBoxColor` | Color of the input box                | -                  | string  |
| `styleInputCircleColor` | Color of the input circles                | -                  | string  |
| `styleNumberFontColor` | Color of the number fonts              | -                  | string  |
| `styleNumberButtonColor` | Color of the number buttons              | -                  | string  |
| `styleResetButtonColor` | Color of the reset button                 | -                  | string  |
| `styleDeleteButtonColor` | Color of the delete button              | -                  | string  
| `styleHoverColor` | Hover color for the buttons              | -                  | string  
| `style` | Inline style              | -                  | React.CSSProperties  

### `onComplete` Function
- *`inputValue`: The PIN entered by the user.
- `setMessage`: Function to display a message.
- `setErrorMessage`: Function to display an error message.

The `onComplete` function is called when the user finishes entering their PIN. It checks the PIN and, depending on whether it's correct or not, executes a user-defined event.

## Example
|Default|Bottom Layout|
|:--------------------------------------:|:---------------------------------------:|
| ![Default](https://github.com/prkhch/react-pincode/assets/122577719/f404f088-84c8-48eb-a5d0-47d8d5eceb51) | ![BottomLayout](https://github.com/prkhch/react-pincode/assets/122577719/a3b27f88-1cf3-43f5-b8d9-a2cda97872af) | 

|Random Keypad|Customizing|
|:--------------------------------------:|:---------------------------------------:|
| ![Random Keypad](https://github.com/prkhch/react-pincode/assets/122577719/12768754-aec3-4328-b286-458c9e528e34) | ![Customizing](https://github.com/prkhch/react-pincode/assets/122577719/e6b638f1-6b23-4009-97e2-f9a82fc7ae16) | 
