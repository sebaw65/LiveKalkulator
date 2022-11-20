import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState([]);

  useEffect(() => {
    console.log("Równanie", input);
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
        console.log("Operator", lastChar);
        setInput((oldArray) => [...oldArray, lastChar]);
        return;
      } else {
        console.log("Litera", inputValue.target.value);
        inputValue.target.value.slice(0, -1);
        return;
      }
    } else setInput((oldArray) => [...oldArray, lastChar]);
    props.valueHandler(input);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Wprowadź równanie"
      onChange={inputFieldValue}
      value={input.join("")}
      /* tutaj wywołuję funkcję inputFieldValue w której przekażę na górę zawartość inputa*/
    />
  );
};

export default Input;
