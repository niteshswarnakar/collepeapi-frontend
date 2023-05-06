import React from "react";
import classes from "../styles/Button.module.css";
const Button = ({ mytype, submitHandler, children }) => {
  return (
    <div className={classes.buttonbox}>
      <button
        className={classes.mybutton}
        onClick={submitHandler}
        type={mytype}>
        {children}
      </button>
    </div>
  );
};

export default Button;
