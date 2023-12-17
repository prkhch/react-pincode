import { Pincode } from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue }) => {
    console.log(inputValue);
  };

  return (
    <div>
      <Pincode onComplete={onComplete} />
    </div>
  );
}

export default App;
