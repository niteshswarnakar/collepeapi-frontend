import React, { useState, useEffect } from "react";
import ConfessionCard from "../components/ConfessionCard";
import classes from "../styles/ConfessionPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
const ConfessionPage = () => {
  const navigate = useNavigate();
  const [allConfession, setAllConfession] = useState([]);
  const [loading, setLoading] = useState(false);
  const getConfession = async () => {
    const { data } = await axios.get(
      "https://collegeapi-backend.vercel.app/api/get-confession"
    );
    if (data) {
      setAllConfession(data.reverse());
    }
  };

  useEffect(() => {
    getConfession();
  }, []);

  useEffect(() => {
    if (allConfession.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

  return (
    <section className={classes.confessionPage}>
      <div className={classes.createButton}>
        <button onClick={() => navigate("/add-confession")}>
          Create confession
        </button>
      </div>
      <div className={classes.container}>
        {loading ? (
          <ClipLoader
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <>
            {allConfession.map((confession, index) => {
              return (
                <button
                  key={index}
                  className={classes.button_card}
                  onClick={() => {
                    navigate(`/confession/${confession._id}`, {
                      state: { allConfession },
                    });
                  }}>
                  <ConfessionCard confession={confession} />
                </button>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default ConfessionPage;
