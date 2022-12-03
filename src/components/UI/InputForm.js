import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState("");
  const [isBracketClosed, setIsBracketClosed] = useState(true);

  useEffect(() => {
    const lastChar = input.at(-1);
    //błąd spowodowany wykryciem sąsiadujących znaków
    if (/[+\-*/]/.test(lastChar)) return;
    //błąd spowodowany wprowadzeniem innych znaków niż dopuszczalne
    if (/[^0-9+\-*/()]+/g.test(input)) {
      alert("Wykryto niepoprawny znak lub znaki");
      return;
    }
    // console.log(!isBracketClosed);
    //sprawdza czy nawias został zamknięty
    if (!isBracketClosed) {
      console.log("Zamknij nawias");
      return;
    }
    // console.log(lastChar);
    props.valueHandler(input); //przekaz wartosc input do komponentu powyzej
  }, [input]);

  const inputFieldValue = (inputValue) => {
    const lastInput = inputValue.target.value.at(-1),
      preLastInput = inputValue.target.value.at(-2),
      openBracketCount = (inputValue.target.value.match(/[(]/g) || []).length, //sprawdza ile jest nawiasów otwartych
      closedBracketCount = (inputValue.target.value.match(/[)]/g) || []).length, //sprawdza ile jest nawiasów zamkniętych
      acceptedInputRegex = /[0-9+\-*/()]/, //zawiera cyfry od 0-9 i znaki +-*/()
      symbolRegex = /[+\-*/]/; //zawiera znaki znaki +-*/

    // console.log(inputValue.target.value.length);
    if (openBracketCount !== closedBracketCount && lastInput !== "(")
      setIsBracketClosed(false);
    if (openBracketCount === closedBracketCount) {
      setIsBracketClosed(true);
    }

    if (acceptedInputRegex.test(lastInput)) {
      //sprawdza czy ostatni i przedostatni znak to symbol. Jeśli tak, to nadpisuje ostatni znak
      if (symbolRegex.test(lastInput))
        if (symbolRegex.test(preLastInput)) {
          return setInput(inputValue.target.value.slice(0, -2) + lastInput);
        }
      if (lastInput === "(")
        if (/[0-9]/.test(preLastInput)) {
          return setInput(input + "*" + lastInput);
        }
      if (/[0-9]/.test(lastInput))
        if (preLastInput === ")") {
          return setInput(input + "*" + lastInput);
        }
      if (lastInput === "(")
        if (preLastInput === ")") {
          return setInput(input + "*" + lastInput);
        }
      if (lastInput === "0")
        if (preLastInput === "/") {
          alert("Nie wolno dzielić przez 0");
          return;
        }
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
