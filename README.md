# Pincode Component for React

### Quick Start
```
npm install @prkhch/react-pincode
```

```
import { Pincode } from "@prkhch/react-pincode";

function App() {
  const onComplete = ({ inputValue, setMessage, setErrorMessage }) => {
    // Request correct password from the server.
    // Example correct password = "000000"

    if (inputValue === "000000") {
      setMessage("Correct");
      setErrorMessage("");
    }

    if (inputValue !== "000000") {
      setMessage("");
      setErrorMessage("InCorrect");
    }
  };

  return (
    <div>
      <Pincode
        onComplete={onComplete}
        randomKeypad={true}
        maxLength={6}
        defaultMessage="Enter Password"
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

```

속성
|Name|Description|Default|Type|
|------|---|---|---|
|onComplete*|테스트2|테스트3|-
|randomKeypad|테스트2|테스트3|-
|Length|Length of password|4 (min:4 max:8)|-
- onComplete*
- randomKeypad
- Length (default:4, max:8)
- styleBottomLayout
