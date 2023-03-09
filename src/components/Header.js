import React from "react";
import mylogo from "../assets/webpagelogo.png";
import { Link } from "react-router-dom";
import classes from "../styles/Header.module.css";
const Header = () => {
  return (
    <div className={classes.headerdiv}>
      <div className={classes.header}>
        <div className={classes.left}>
          <img className={classes.mylogo} src={mylogo} />
        </div>
        <div className={classes.right}>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            @neptechbyte
          </Link>
          <Link style={{ textDecoration: "none", color: "#000" }} to="/">
            .
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
