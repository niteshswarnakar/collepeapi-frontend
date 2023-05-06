import React from "react";
import classes from "./Input.module.css";
const Input = ({ placeholder, label, type, inputRef }) => {
  return (
    <div className={classes.inputDiv}>
      <p id="from">{label}</p>
      <input placeholder={placeholder} type={type} ref={inputRef} />
    </div>
  );
};

export default Input;
