import React from "react";
import electionFlex from "../assets/election.png";
import classes from "../App.module.css";
const ElectionPost = () => {
  return (
    <div className={classes.electionContainer}>
      <marquee>
        <img className={classes.electionFlex} src={electionFlex}></img>;
      </marquee>
    </div>
  );
};

export default ElectionPost;
