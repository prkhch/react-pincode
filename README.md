# Pincode Component for React

### Quick Start
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
### Options 
###### \* : Required
| Name              | Description                                  | Default            | Type    |
|-----------------------|----------------------------------------------|--------------------|---------|
| `onComplete`*         | Callback function when input is complete     | -                  | function |
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
