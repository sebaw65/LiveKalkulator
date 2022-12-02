import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import InputForm from "./components/UI/InputForm";
import Calculate from "./calculate/Calculate";

function App() {
  const [resultString, setResultString] = useState("");

  // useEffect(() => {
  //   console.log("app", resultString);
  // }, [resultString]);

  const getValueFromField = (input) => {
    setResultString(input);
  };

  return (
    <div className="App">
      <InputForm
        valueHandler={
          getValueFromField
        } /* przekazanie parametru którym posłużę się do wyciągnięcia wartości inputa */
      />
      <Calculate enteredString={resultString} />
      {/* <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div>
      <div>Znak</div> */}
    </div>
  );
}

export default App;
