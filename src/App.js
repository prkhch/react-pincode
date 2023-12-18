import { Pincode } from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue }) => {
    console.log(inputValue);
  };

  return (
    <div>
      <Pincode onComplete={onComplete} randomKeypad={true} styleBottomLayout={false} maxLength={6} />
    </div>
  );
}

export default App;
