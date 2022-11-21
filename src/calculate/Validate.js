import React, { useEffect, useState } from "react";

const Validate = (props) => {
  const [result, setResult] = useState("");

  function equation(input) {
    return new Function("return " + input)();
  }

  useEffect(() => {
    if (!isNaN(props.enteredString.at(-1)))
      setResult(equation(props.enteredString));
  }, [props.enteredString]);

  return (
    <>
      <div>Wynik to: {result}</div>
    </>
  );
};

export default Validate;
