import React from "react";
// import electionFlex from "../assets/architecture.jpg";
import pulchowkGirls from "../assets/pulchowkgirls.jpg";
import classes from "../App.module.css";
const ElectionPost = () => {
  return (
    <div className={classes.electionContainer}>
      <marquee>
        <img className={classes.electionFlex} src={pulchowkGirls}></img>;
        {/* <h2>Choose your candidate responsibly</h2> */}
      </marquee>
    </div>
  );
};

export default ElectionPost;
