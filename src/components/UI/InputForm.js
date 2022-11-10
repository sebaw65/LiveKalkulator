import React from "react";

import styles from "./InputForm.module.css";

const Input = (props) => {
  const inputFieldValue = (value) => {
    // console.log(props.target.value);
    props.valueHandler(value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Wprowadź równanie"
      onChange={
        inputFieldValue
      } /* tutaj wywołuję funkcję inputFieldValue w której przekażę na górę zawartość inputa*/
    />
  );
};

export default Input;
