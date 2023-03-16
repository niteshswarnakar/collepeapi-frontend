import React from "react";
// import electionFlex from "../assets/architecture.jpg";
import pulchowkGirls from "../assets/pulchowkgirls.jpg";
import classes from "../App.module.css";
const ElectionPost = () => {
  return (
    <div className={classes.electionContainer}>
      <marquee>
        <img className={classes.electionFlex} src={pulchowkGirls}></img>;
      </marquee>
    </div>
  );
};

export default ElectionPost;
