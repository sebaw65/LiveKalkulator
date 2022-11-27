import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState([]);
  //w późniejszym czasie zrobię tu porządek i oddzielę część funkcjonalną od wizualnej
  useEffect(() => {
    // console.log(input);
    props.valueHandler(input); //przekaz wartosc input do komponentu powyzej
  }, [input]);

  const inputFieldValue = (inputValue) => {
    const lastChar = inputValue.target.value.at(-1),
      regexLastInput = /[0-9+\-*/]/,
      regexePrevInput = /[+\-*/]/;

    if (regexLastInput.test(lastChar)) {
      if (regexePrevInput.test(lastChar)) if (input.at(-1) === lastChar) return;
    }
    setInput((oldArray) => [...oldArray, lastChar]);
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Wprowadź równanie"
        onChange={inputFieldValue}
        value={input.join("")}
        onKeyDown={(e) => {
          if (e.key === "Backspace") setInput(input.slice(0, -1));
        }}
      />
      <button
        onClick={() => {
          setInput([]);
        }}
      >
        Wyczyść
      </button>
    </>
  );
};

export default Input;
