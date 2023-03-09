import React, { useState, useRef } from "react";
import classes from "../App.module.css";
import Cardpage from "./Cardpage";
import { Button, Grid, Stack, Box, TextField } from "@mui/material";
import axios from "axios";
const Home = () => {
  let flag = false;
  const [students, setStudents] = useState([]);
  let prog = useRef();
  let batch = useRef();
  let group = useRef();
  let url = "https://collegeapi-backend.vercel.app/api/students";
  let requestOption = new URLSearchParams();
  const submitHandler = async (e) => {
    e.preventDefault();

    requestOption.append("prog", prog.current.value);
    requestOption.append("batch", batch.current.value);
    requestOption.append("group", group.current.value);
    try {
      let response = await axios.post(url, requestOption);
      let data = await response.data;

      setStudents(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack className={classes.App}>
      <Grid xs={12} container direction="column">
        {!flag && (
          <form className={classes.myform} onSubmit={submitHandler}>
            <p>Generate your cross-department's friends detail</p>
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
            <Button variant="contained" type="submit" onClick={submitHandler}>
              Fetch Data
            </Button>
          </form>
        )}
      </Grid>
      <Grid className={classes.carContainer} container xs={12} spacing={4}>
        {students.map((student, index) => {
          return <Cardpage key={index} student={student} />;
        })}
      </Grid>
    </Stack>
  );
};

export default Home;
