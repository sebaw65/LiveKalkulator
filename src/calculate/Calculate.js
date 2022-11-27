import React, { useEffect, useState } from "react";

const Calculate = (props) => {
  const [result, setResult] = useState("");

  function equation(input) {
    return new Function("return " + input)();
  }

  useEffect(() => {
    if (props.enteredString.length === 0) { setResult("0"); return; } //prettier-ignore
    else if (!isNaN(props.enteredString.at(-1))) {
      setResult(equation(props.enteredString.join("")));
      return;
    }
  }, [props.enteredString]);

  return (
    <>
      <div>Wynik to: {result}</div>
    </>
  );
};

export default Calculate;
