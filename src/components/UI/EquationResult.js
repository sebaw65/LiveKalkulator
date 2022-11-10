import React from "react";

// import styles from "./EquationResult.module.css";

const EquationResult = (props) => {
  let result;
  console.log(equation(props.displayResult));

  // Zablokować obliczanie w przypadku wpisania innego znaku niż cyfry. Należy rozpoznać znak i wykonać odpowienie działanie po wpisaniu po znaku cyfry.
  function equation(input) {
    return new Function("return " + input)();
  }

  if (props.displayResult == undefined) {
    if (!isNaN(props.displayResult))
      return (result = "Wprowadź prawidłowe równanie");
    else result = equation(props.displayResult);
  }

  return <div>Wynik to: {result}</div>;
};

export default EquationResult;
