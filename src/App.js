import Pincode from "./lib/Pincode";

function App() {
  // example
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
    console.log(inputValue);
    if (inputValue === "0000") {
      setMessage("Correct PIN!");
      setErrorMessage("");
    }

    if (inputValue !== "0000") {
      setMessage("");
      setErrorMessage("InCorrect PIN!");
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
      />
    </div>
  );
}

export default App;
