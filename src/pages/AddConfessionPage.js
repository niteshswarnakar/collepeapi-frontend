import React, { useRef } from "react";
import classes from "../styles/AddConfessionPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddConfessionPage = () => {
  const navigate = useNavigate();
  const to = useRef();
  const from = useRef();
  const message = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const confessionData = {
      to: to.current.value,
      from: from.current.value,
      message: message.current.value,
    };

    try {
      const { data } = await axios.post(
        "https://collegeapi-backend.vercel.app/api/add-confession",
        confessionData
      );

      navigate("/confession");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={classes.section__confession}>
      <div className={classes.confession__div}>
        <form onSubmit={submitHandler}>
          <h1 className={classes.heading}>Your Confession </h1>
          <p className={classes.anonymous}>You are completely anonymous</p>
          <div className={classes.inputDiv}>
            <p id="to">To</p>
            <input
              placeholder="eg. David Walker, BCT, 075"
              type="text"
              ref={to}
            />
          </div>
          <div className={classes.inputDiv}>
            <p id="from">From</p>
            <input
              placeholder="eg. David Walker, BCT, 075"
              type="text"
              ref={from}
            />
          </div>
          <div className={classes.inputDiv}>
            <p id="message">Confession</p>
            <input placeholder="message" type="text" ref={message}></input>
          </div>
          <button className={classes.SubmitButton} type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddConfessionPage;
