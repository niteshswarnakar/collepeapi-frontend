import React from "react";
import classes from "./ConfessionCard.module.css";
const ConfessionCard = ({ confession }) => {
  return (
    <div className={classes.cardBox}>
      <div>
        <p>To: {confession.from}</p>
        <p>From: {confession.to}</p>
      </div>
      <p className={classes.message}>{confession.message}</p>
    </div>
  );
};

export default ConfessionCard;
