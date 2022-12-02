import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");
  const [isBracketClosed, setIsBracktClosed] = useState(true);
  //w późniejszym czasie zrobię tu porządek i oddzielę część funkcjonalną od wizualnej

  useEffect(() => {
    const lastChar = input.at(-1);
    //błąd spowodowany wykryciem sąsiadujących znaków
    if (/[+\-*/)]/.test(lastChar)) return;

    //błąd spowodowany wprowadzeniem innych znaków niż dopuszczalne
    if (/[^0-9+\-*/()]+/g.test(input)) {
      alert("Wykryto niepoprawny znak lub znaki");
      return;
    }
    //sprawdza czy nawias został zamknięty
    if (!isBracketClosed) {
      console.log("Zamknij nawias");
      return;
    }

    props.valueHandler(input); //przekaz wartosc input do komponentu powyzej
  }, [input]);

  const inputFieldValue = (inputValue) => {
    const regexLastInput = /[0-9+\-*/()]/,
      regexePrevInput = /[+\-*/]/,
      lastInput = inputValue.target.value.at(-1),
      preLastInput = inputValue.target.value.at(-2),
      openBracketCount = (inputValue.target.value.match(/[(]/g) || []).length,
      closedBracketCount = (inputValue.target.value.match(/[)]/g) || []).length;

    console.log(inputValue.target.value.length);
    if (openBracketCount > closedBracketCount && lastInput !== "(")
      setIsBracktClosed(false);
    if (openBracketCount === closedBracketCount) setIsBracktClosed(true);
    if (openBracketCount < closedBracketCount) setIsBracktClosed(false);

    if (regexLastInput.test(lastInput)) {
      if (regexePrevInput.test(lastInput))
        if (
          preLastInput === "+" ||
          preLastInput === "-" ||
          preLastInput === "*" ||
          preLastInput === "/"
        ) {
          setInput(inputValue.target.value.slice(0, -2) + lastInput);
          return;
        }
      console.log(inputValue.target.value);
      setInput(inputValue.target.value);
    }
  };

  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Wprowadź równanie"
        onChange={inputFieldValue}
        value={input}
      />
      <button
        onClick={() => {
          setInput("");
        }}
      >
        Wyczyść
      </button>
    </>
  );
};

export default Input;
