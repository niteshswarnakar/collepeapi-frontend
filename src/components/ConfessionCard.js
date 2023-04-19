import React from "react";
import classes from "./ConfessionCard.module.css";
const ConfessionCard = ({ allConfession, confession }) => {
  return (
    <div className={classes.cardBox}>
      <div>
        <p>To: {confession.from}</p>
        <p className={classes.toField}>From: {confession.to}</p>
      </div>
      <p className={classes.message}>{confession.message}</p>
      <p className={classes.date}>{confession.date}</p>
    </div>
  );
};

export default ConfessionCard;
