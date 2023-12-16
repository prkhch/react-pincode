import { Pincode } from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue }) => {
    console.log(inputValue);
    if (inputValue === "1234") {
      console.log("맞음");
    } else {
      console.log("틀림");
    }
  };

  return (
    <div>
      <Pincode onComplete={onComplete} />
    </div>
  );
}

export default App;
