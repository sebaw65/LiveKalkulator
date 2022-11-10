import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import EquationResult from "./components/UI/EquationResult";
import InputForm from "./components/UI/InputForm";

function App() {
  const [result, setResult] = useState("Wynik");

  const getValueFromField = (el) => {
    // console.log(el.target.value);
    setResult(el.target.value);
  };

  return (
    <div className="App">
      <EquationResult displayResult={result} />
      <InputForm
        valueHandler={
          getValueFromField
        } /* przekazanie parametru którym posłużę się do wyciągnięcia wartości inputa */
      />
      {/* <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div> */}
    </div>
  );
}

export default App;
