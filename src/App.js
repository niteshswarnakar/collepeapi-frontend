import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Button from "./components/Button";
import ElectionPost from "./components/ElectionPost";
import classes from "./App.module.css";
function App() {
  return (
    <Router>
      <Header />
      <div className={classes.ErrorMessage}>
        <p>Kei samaye lai banda gariyeko xa 👺...</p>
        <a href="https://www.programiz.com/">https://www.programiz.com/</a>
      </div>
      {/* <ElectionPost /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </Router>
  );
}

export default App;
