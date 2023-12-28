import Pincode from "./lib/Pincode";

function App() {
  // example
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
    console.log(inputValue);

    if (inputValue === "000000") {
      setMessage("Correct Pincode!");
      setErrorMessage("");
    }

    if (inputValue !== "000000") {
      setMessage("");
      setErrorMessage("Incorrect Pincode!");
    }
  };

  return (
    <div>
      <Pincode
        onComplete={onComplete}
        randomKeypad={false}
        maxLength={6}
        defaultMessage="Enter Pincode~"
        styleBottomLayout={true}
        styleMessageColor="#4F86C6"
        styleErrorMessageColor="#D81159"
        styleInputCircleColor="#4F86C6"
        styleNumberButtonColor="#4F86C6"
        styleResetButtonColor="#4F86C6"
        styleDeleteButtonColor="#4F86C6"
      />
    </div>
  );
}

export default App;
