import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const SingleConfessionPage = () => {
  const navigate = useLocation();
  const { id } = useParams();

  const [allConfession, setAllConfession] = useState([]);
  const [confession, setConfession] = useState();
  const getConfession = async () => {
    try {
      const { data } = await axios.get(
        "https://collegeapi-backend.vercel.app/api/get-confession"
      );
      console.log({ data });
      if (data) {
        setAllConfession(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConfession();
  }, []);

  useEffect(() => {
    const newconfession = allConfession.find((confession) => {
      return String(confession._id) === String(id);
    });
    console.log({ allConfession });

    setConfession(newconfession);
    console.log({ confession });
    // setConfession(allConfession.find((confession) => confession._id === id));
    // console.log({ confession });
  }, []);

  return (
    <div>
      <p>{confession?.to}</p>
      <p>{confession?.from}</p>
      <p>{confession?.message}</p>
      {confession?.comments?.map((comment, index) => {
        return <p key={index}>{comment}</p>;
      })}
    </div>
  );
};

export default SingleConfessionPage;
