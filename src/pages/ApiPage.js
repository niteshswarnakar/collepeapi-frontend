import React from "react";
import classes from "../styles/ApiPage.module.css";

const ApiPage = () => {
  return (
    <section className={classes.section_api}>
      <div className={classes.api_main}>
        <p className={classes.heading}>Available api routes</p>
        <div>
          <p className={classes.request_method}>GET Request</p>
          <p className={classes.api_url}>
            https://collegeapi-backend.vercel.app
          </p>
        </div>
        <div>
          <p className={classes.request_method}>POST Request</p>
          <p className={classes.api_url}>
            https://collegeapi-backend.vercel.app/api/students
          </p>
          <p>{'body  -  {"prog":"BCE","batch":"078","group":"E"}'}</p>
        </div>
      </div>
    </section>
  );
};

export default ApiPage;
