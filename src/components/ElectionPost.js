import React, { useEffect, useState } from "react";
// import electionFlex from "../assets/architecture.jpg";
// import pulchowkGirls from "../assets/pulchowkgirls.jpg";

import axios from "axios";

import classes from "../App.module.css";
const ElectionPost = () => {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    const getJoke = async () => {
      try {
        const { data } = await axios.get(
          "https://v2.jokeapi.dev/joke/Programming"
        );
        setJoke((prevState) => [...prevState, data?.setup, data?.delivery]);
      } catch (err) {
        console.log(err);
      }
    };

    getJoke();
  }, []);

  return (
    <div className={classes.electionContainer}>
      <marquee>
        {joke.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        {/* <img className={classes.electionFlex} src={pulchowkGirls}></img>; */}
      </marquee>
    </div>
  );
};

export default ElectionPost;
