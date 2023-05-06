import React, { useState, useEffect, CSSProperties, useRef } from "react";
import classes from "../App.module.css";
import Cardpage from "./Cardpage";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Input from "../components/Input";
import Button from "../components/Button";

const override = {
  display: "block",
  margin: "2rem auto",
  borderColor: "red",
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [photoAlert, setPhotoAlert] = useState(false);
  let flag = false;
  const [students, setStudents] = useState([]);
  let prog = useRef();
  let batch = useRef();
  let group = useRef();
  let message = useRef();

  let url = "https://collegeapi-backend.vercel.app/api/students";
  // let url = "http://localhost:5000/api/students";

  let requestOption = new URLSearchParams();
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    requestOption.append("prog", prog.current.value);
    requestOption.append("batch", batch.current.value);
    requestOption.append("group", group.current.value);
    requestOption.append("message", message.current.value);
    try {
      let response = await axios.post(url, requestOption);
      let data = await response.data;

      setStudents(data);
      setPhotoAlert(true);
    } catch (err) {
      console.log(err);
    }
  };

  const messages = [
    "Find whose photo appears in your profile card 💘",
    "Find your photo in another friend's profile card 👫👫",
    "Are you enjoying this app 🎅",
    "You can share this website link for fun 💘",
    "Share this website to your friends 💘",
    "Browse in laptop for better experience ",
    "You can also search Archi's Glamours 👸👸",
    "People say BCTians are wierd, is it? 👺👺",
    "Don't forget to check Chemical people",
    "Civil engineering has greater scope in Nepal 👷 , is it?",
    "Mechanical guys are awesome 👲👲",
    "Did you find your profile picture here? 😍",
    "Search your crush from every department 😀",
    "Trying to find program code for chemical, it is BCH",
    "Trying to find program code for Architecture, I also don't know 😀 ",
    "Who writes in confession pages when you can directly find here email of your crush ",
    "Still not found what you're searching 🙁🙁 , seriously ?",
    "Don't forget to tap on the youtube icon 😀😀",
    "Why are you still searching here 🐼🐼",
    "Grab the email 💕 and spam your friend ",
    "Are you fresher or ... ",
  ];

  const min = 0;
  const max = 18;
  const randMessageIndex = Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    if (students.length !== 0) {
      setLoading(false);
    }
  }, [students]);

  return (
    <div className={classes.homepage_section}>
      <div className={classes.home_container}>
        {!flag && (
          <form className={classes.myform} onSubmit={submitHandler}>
            <p className={classes.myform_p}>
              Generate your cross-department's friends details 💘
            </p>
            <Input
              type="text"
              label="Program"
              inputRef={prog}
              placeholder="eg. BCH"
            />
            <Input
              type="text"
              label="Batch"
              inputRef={batch}
              placeholder="eg. 076"
            />
            <Input
              label="Group"
              type="text"
              inputRef={group}
              placeholder="eg. A"
            />
            <Input
              label="Your message"
              type="text"
              inputRef={message}
              placeholder="any feedback"
            />
            <Button type="submit" submitHandler={submitHandler}>
              Fetch Data
            </Button>
          </form>
        )}
      </div>

      {photoAlert && (
        <div className={classes.random_message_div}>
          <p>{messages[randMessageIndex]}</p>
        </div>
      )}
      <div className={classes.cardContainer} container xs={12} spacing={4}>
        {loading ? (
          <ClipLoader
            loading={loading}
            size={50}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            {students.map((student, index) => {
              return <Cardpage key={index} student={student} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
