import { Pincode } from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue }) => {
    console.log(inputValue);
  };

  return (
    <div>
      <Pincode onComplete={onComplete} randomKeypad={false} styleBottomLayout={false} />
    </div>
  );
}

export default App;
