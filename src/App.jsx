import React from "react";
import "./Reset.css";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      {/* Router contains all of our pages and paths */}
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome to the Home Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
