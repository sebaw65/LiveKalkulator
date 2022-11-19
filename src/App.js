import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import EquationResult from "./components/UI/EquationResult";
import InputForm from "./components/UI/InputForm";
import Validate from "./calculate/Validate";

function App() {
  const [result, setResult] = useState("");
  const getValueFromField = (el) => {
    // console.log(el.target.value);
    setResult(el.target.value);
  };

  return (
    <div className="App">
      <InputForm
        valueHandler={
          getValueFromField
        } /* przekazanie parametru którym posłużę się do wyciągnięcia wartości inputa */
      />
      <Validate enteredString={result} />
      {/* <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div> */}
    </div>
  );
}

export default App;
