###### PIN code Component for React

## Quick Start
```
npm install @prkhch/react-pincode
```

```
import { Pincode } from "@prkhch/react-pincode";

function App() {
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
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
      <Pincode onComplete={onComplete} />
    </div>
  );
}

export default App;
```
## Options 
###### \* : Required
| Name              | Description                                  | Default            | Type    |
|-----------------------|----------------------------------------------|--------------------|---------|
| *`onComplete`         | Callback function when input is complete     | -                  | function |
| `randomKeypad`        | Randomizes the number pad                    | false           | boolean |
| `length`              | Length of the password                       | 4 (min:4, max:8)  | number  |
| `defaultMessage`      | Default message displayed                    | -                  | string  |
| `styleBottomLayout`   | Enable/disable bottom layout style           | false           | boolean |
| `styleBackgroundColor`| Background color of the component            | -                | string  |
| `styleMessageColor`   | Text color for the message                   | -                  | string  |
| `styleErrorMessageColor` | Text color for the error message          | -                  | string  |
| `styleInputCircleColor` | Color of the input circles                | -                  | string  |
| `styleNumberButtonColor` | Color of the number buttons              | -                  | string  |
| `styleResetButtonColor` | Color of the reset button                 | -                  | string  |
| `styleDeleteButtonColor` | Color of the delete button              | -                  | string  

## Example
|Default|Bottom Layout|
|:--------------------------------------:|:---------------------------------------:|
| ![Default](https://github.com/prkhch/react-pincode/assets/122577719/d2bbed43-21fd-45f7-a8e9-1a154b6679f1) | ![BottomLayout](https://github.com/prkhch/react-pincode/assets/122577719/49248ae0-404c-46d1-9b37-5fead86d3c5c) | 

|Random Keypad|Customizing|
|:--------------------------------------:|:--------------------------------------:|
| ![Random Keypad](https://github.com/prkhch/react-pincode/assets/122577719/5d2a4528-9c06-4b31-af04-56a1c0f2fd05) | ![Customizing](https://github.com/prkhch/react-pincode/assets/122577719/8aa5c45d-6456-4895-bd04-c2ab4396d711) | 
