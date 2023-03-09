import React from "react";
import mylogo from "../assets/webpagelogo.png";
import { Link } from "react-router-dom";
import classes from "../styles/Header.module.css";
import iamnitesh from "../assets/iamnitesh.png";
import { SocialIcon } from "react-social-icons";
const Header = () => {
  return (
    <div className={classes.headerdiv}>
      <div className={classes.header}>
        <div className={classes.left}>
          <a href="/" className={classes.topHome}>
            <img className={classes.mylogo} src={mylogo} />
            <span>Home</span>
          </a>
        </div>
        <div className={classes.right}>
          <a
            className={classes.youtubeIcon}
            style={{ textDecoration: "none", color: "#000" }}
            to="https://www.youtube.com/@neptechbyte/videos">
            <SocialIcon url="https://www.youtube.com/@neptechbyte/videos" />
          </a>
          <a
            style={{ textDecoration: "none", color: "#000" }}
            href="https://www.youtube.com/@neptechbyte/videos">
            neptech
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
