import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    console.log(input);
    props.valueHandler(input.join(""));
  }, [input]);

  const inputFieldValue = (inputValue) => {
    const lastChar = inputValue.target.value.at(-1);

    if (isNaN(lastChar)) {
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        // console.log("Operator", lastChar);
        setInput((oldArray) => [...oldArray, lastChar]);
        return;
      } else return;
    } else if (lastChar == " ") return;
    else setInput((oldArray) => [...oldArray, lastChar]);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Wprowadź równanie"
      onChange={inputFieldValue}
      value={input.join("")}
      onKeyDown={(e) => {
        if (e.key === "Backspace") setInput(input.slice(0, -1));
      }}
      /* tutaj wywołuję funkcję inputFieldValue w której przekażę na górę zawartość inputa*/
    />
  );
};

export default Input;
