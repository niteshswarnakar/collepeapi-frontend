import React, { useState, useRef } from "react";
import classes from "../App.module.css";
import Cardpage from "./Cardpage";
import { Button, Grid, Stack, Box, TextField } from "@mui/material";
import axios from "axios";
const Home = () => {
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
  return (
    <Stack className={classes.App}>
      <Grid xs={12} container direction="column">
        {!flag && (
          <form className={classes.myform} onSubmit={submitHandler}>
            <p>Generate your cross-department's friends details 💘</p>
            <TextField
              name="prog"
              type="text"
              label="Program"
              inputRef={prog}
              placeholder="eg. BCH"
            />
            <TextField
              type="text"
              name="batch"
              label="Batch"
              id="batch"
              inputRef={batch}
              placeholder="eg. 076"
            />
            <TextField
              label="Group"
              type="text"
              name="group"
              id="group"
              inputRef={group}
              placeholder="eg. A"
            />
            <TextField
              label="Your message to the developer"
              type="text"
              name="message"
              id="message"
              inputRef={message}
              placeholder="any feedback"
            />
            <Button variant="contained" type="submit" onClick={submitHandler}>
              Fetch Data
            </Button>
          </form>
        )}
      </Grid>
      {photoAlert && (
        <Grid item>
          <h4>
            Due to some students concern about their email and photo, I removed
            those fields
          </h4>
        </Grid>
      )}
      {photoAlert && (
        <Grid item>
          <p>{messages[randMessageIndex]}</p>
        </Grid>
      )}
      <Grid className={classes.carContainer} container xs={12} spacing={4}>
        {students.map((student, index) => {
          return <Cardpage key={index} student={student} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Home;
