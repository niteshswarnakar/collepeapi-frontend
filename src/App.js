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
import AddBook from "./pages/AddBook";
function App() {
  return (
    <Router>
      <Header />
      <ElectionPost />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confession" element={<ConfessionPage />} />
        <Route path="/confession/:id" element={<SingleConfessionPage />} />
        <Route path="/add-confession" element={<AddConfessionPage />} />
        <Route path="/api-endpoints" element={<ApiPage />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
