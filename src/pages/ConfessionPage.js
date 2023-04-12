import React from "react";
import ConfessionCard from "../components/ConfessionCard";
import classes from "../styles/ConfessionPage.module.css";
const ConfessionPage = () => {
  const confessionList = [
    {
      to: "BCT",
      from: "BCE",
      message:
        "Hi, You are different than other. You personality is just  unique",
    },
    {
      to: "BCT",
      from: "BCE",
      message:
        "Hi, You are different than other. You personality is just  unique",
    },
    {
      to: "BCT",
      from: "BCE",
      message:
        "Hi, You are different than other. You personality is just  unique. Hi, You are different than other. You personality is just  unique . Hi, You are different than other. You personality is just  unique",
    },
    {
      to: "BCT",
      from: "BCE",
      message:
        "Hi, You are different than other. You personality is just  unique",
    },
  ];

  return (
    <section className={classes.confessionPage}>
      <div className={classes.container}>
        {confessionList.map((confession) => {
          return <ConfessionCard confession={confession} />;
        })}
      </div>
    </section>
  );
};

export default ConfessionPage;
