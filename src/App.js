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
        length={6}
        defaultMessage="Enter PIN"
        // styleBottomLayout={true}
        styleBackgroundColor="#000000"
        styleMessageColor="#ffffff"
        styleErrorMessageColor="#ff0000"
        styleInputBoxColor="#3d455b"
        styleInputCircleColor="#ffffff"
        styleNumberFontColor="#ffffff"
        styleNumberButtonColor="#3d455b"
        styleResetButtonColor="#ffffff"
        styleDeleteButtonColor="#ffffff"
        styleHoverColor="#596482"
      />
    </div>
  );
}

export default App;
