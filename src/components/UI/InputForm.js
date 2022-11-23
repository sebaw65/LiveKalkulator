import React, { useEffect, useState } from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const [input, setInput] = useState([]);
  //w późniejszym czasie zrobię tu porządek i oddzielę część funkcjonalną od wizualnej
  useEffect(() => {
    console.log(input);
    props.valueHandler(input); //przekaz wartosc input do komponentu powyzej
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
        if (
          input.at(-1) === "+" ||
          input.at(-1) === "-" ||
          input.at(-1) === "*" ||
          input.at(-1) === "/"
        )
          return;
        // console.log("Operator", lastChar);
        setInput((oldArray) => [...oldArray, lastChar]); //w przypadku gdy znak zostanie wpisany tylko raz
        return;
      } else return;
    } else if (lastChar === " ") return;
    else setInput((oldArray) => [...oldArray, lastChar]); //gdy zostanie wprowadzona cyfra
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
