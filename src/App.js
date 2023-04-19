import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Button from "./components/Button";
import ElectionPost from "./components/ElectionPost";
import classes from "./App.module.css";
import Footer from "./components/Footer";
import ConfessionPage from "./pages/ConfessionPage";
import AddConfessionPage from "./pages/AddConfessionPage";
import ApiPage from "./pages/ApiPage";
import SingleConfessionPage from "./pages/SingleConfessionPage";
function App() {
  return (
    <Router>
      <Header />
      {/* <div className={classes.ErrorMessage}>
        <p>Kei samaye lai banda gariyeko xa 👺...</p>
        <a href="https://www.programiz.com/">www.programiz.com</a>
        <a href="https://www.youtube.com/@easyexplanation9220">
          www.youtube.com/@easyexplanation9220
        </a>{" "}
        <a href="https://www.youtube.com/watch?v=D0l_4vXCY_o">
          www.youtube.com/075BCT-PICNIC
        </a>
      </div> */}
      <ElectionPost />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confession" element={<ConfessionPage />} />
        <Route path="/confession/:id" element={<SingleConfessionPage />} />
        <Route path="/add-confession" element={<AddConfessionPage />} />
        <Route path="/api-endpoints" element={<ApiPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
