import React from "react";

// import styles from "./EquationResult.module.css";

const EquationResult = (props) => {
  let result;
  console.log(props.displayResult);
  if (props.displayResult == undefined) {
    if (!isNaN(props.displayResult))
      return (result = "Wprowadź prawidłowe równanie");
    else result = Function("return " + props.displayResult);
  }

  return <div>Wynik to: {result}</div>;
};

export default EquationResult;
