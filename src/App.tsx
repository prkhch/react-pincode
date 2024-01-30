import React from "react";
import "./App.css";
import Pincode from "./lib/Pincode";

function App() {
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
    // Request correct password from the server.
    // Example correct password : 0000
    if (inputValue === "0000") {
      setMessage("Correct!");
      setErrorMessage("");
    }

    if (inputValue !== "0000") {
      setMessage("");
      setErrorMessage("InCorrect!");
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
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
