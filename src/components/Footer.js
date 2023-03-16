import React from "react";
import classes from "../App.module.css";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className={classes.footerDiv}>
      <p>For suggestions - </p>
      <a href="https://www.facebook.com/nitesh.sunar/">@iamnitesh</a>
      <SocialIcon url="https://www.facebook.com/nitesh.sunar/" />
    </div>
  );
};

export default Footer;
