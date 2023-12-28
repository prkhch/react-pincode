import Pincode from "./lib/Pincode";

function App() {
  // example
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
    console.log(inputValue);

    if (inputValue === "000000") {
      setMessage("성공");
      setErrorMessage("");
    }

    if (inputValue !== "000000") {
      setMessage("");
      setErrorMessage("잘못된 입력!");
    }
  };

  return (
    <div>
      <Pincode
        onComplete={onComplete}
        randomKeypad={true}
        maxLength={6}
        defaultMessage="암호 입력"
        styleBottomLayout={true}
        styleBackgroundColor="#f8f9fa"
        styleMessageColor="#0d6efd"
        styleErrorMessageColor="#dc3545"
        styleInputCircleColor="#0d6efd"
        styleNumberButtonColor="#0d6efd"
        styleResetButtonColor="#0d6efd"
        styleDeleteButtonColor="#0d6efd"
      />
    </div>
  );
}

export default App;
