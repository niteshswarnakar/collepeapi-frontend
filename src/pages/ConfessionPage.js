import React, { useState, useEffect } from "react";
import ConfessionCard from "../components/ConfessionCard";
import classes from "../styles/ConfessionPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConfessionPage = () => {
  const navigate = useNavigate();
  const [allConfession, setAllConfession] = useState([]);

  const getConfession = async () => {
    const { data } = await axios.get(
      "https://collegeapi-backend.vercel.app/api/get-confession"
    );
    console.log({ data });
    if (data) {
      setAllConfession(data);
    }
  };

  useEffect(() => {
    getConfession();
  }, []);

  // const confessionList = [

  //   {
  //     to: "BCT",
  //     from: "BCE",
  //     message:
  //       "Hi, You are different than other. You personality is just  unique. Hi, You are different than other. You personality is just  unique . Hi, You are different than other. You personality is just  unique",
  //   },
  //   {
  //     to: "BCT",
  //     from: "BCE",
  //     message: "These are the random test confession for the confession page",
  //   },
  // ];

  return (
    <section className={classes.confessionPage}>
      <div className={classes.createButton}>
        <button onClick={() => navigate("/add-confession")}>
          Create confession
        </button>
      </div>
      <div className={classes.container}>
        {allConfession.map((confession, index) => {
          return <ConfessionCard key={index} confession={confession} />;
        })}
      </div>
    </section>
  );
};

export default ConfessionPage;
