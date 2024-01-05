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
        // length={6}
        defaultMessage="Enter PIN"
        // styleBottomLayout={true}
        // styleBackgroundColor="#f0f0f0"
        styleMessageColor="#088395"
        styleErrorMessageColor="#ff0000"
        styleInputCircleColor="#088395"
        styleNumberFontColor="#0084bc"
        styleNumberButtonColor="#d1d3bf"
        styleResetButtonColor="#088395"
        styleDeleteButtonColor="#088395"
      />
    </div>
  );
}

export default App;
