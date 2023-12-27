import Pincode from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue, setMessage }) => {
    console.log(inputValue);

    if (inputValue !== "000000") {
      setMessage("Incorrect Pincode");
    }
  };

  return (
    <div>
      <Pincode onComplete={onComplete} randomKeypad={true} styleBottomLayout={false} maxLength={6} />
    </div>
  );
}

export default App;
