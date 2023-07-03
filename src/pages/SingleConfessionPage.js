import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import classes from "../styles/SingleConfessionPage.module.css";
import { GrApple } from "react-icons/gr";

const SingleConfessionPage = () => {
  const [inputUser, setInputUser] = useState();
  const [inputComment, setInputComment] = useState();
  const { state } = useLocation();
  const { id } = useParams();
  const [newConfession, setNewConfession] = useState({});

  const confession = state?.allConfession.find((item) => item._id === id);

  // const home_url = "https://collegeapi-backend.vercel.app"
  // const local_url = "http://localhost:5000"

  useEffect(() => {
    setNewConfession({
      ...confession,
      comments: confession?.comments?.reverse(),
    });
  }, []);

  // const home_url = "https://collegeapi-backend.vercel.app"
  const local_url = "http://localhost:5000"

  const commentSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${local_url}/api/add-comment/${id}`,

        {
          comment: inputComment,
          user:inputUser
        }
      );
      console.log({ data });
      setNewConfession(data);
      setInputComment("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={classes.section_confession}>
      <div className={classes.container}>
        <div className={classes.confession_post}>
          <div>
            <div className={classes.topHeader}>
              <GrApple style={{ width: "40px", height: "40px" }} />
              <p>{newConfession?.from}</p>
              <span>&#8594;</span>
              <p>{confession?.to}</p>
            </div>
          </div>
          <p className={classes.message}>{newConfession?.message}</p>
          <div className={classes.linebreak}></div>

          <form
            className={classes.comment_form}
            onSubmit={commentSubmitHandler}>
            <input
              placeholder="Write a comment..."
              onChange={(e) => {
                setInputComment(e.target.value);
              }}
              type="text"
              name="inputComment"
              value={inputComment}
            />
            <input
              placeholder="Your name..."
              onChange={(e) => {
                setInputUser(e.target.value);
              }}
              type="text"
              name="inputUser"
              value={inputUser}
            />
            <button type="submit">Send</button>
          </form>
          <div className={classes.user_comment_div}>
            {newConfession?.comments?.map((comment, index) => {
              return (
                <div key={index} className={classes.comment_message}>
                  <p>{comment?.comment}</p>
                  <p>{comment?.user}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleConfessionPage;
