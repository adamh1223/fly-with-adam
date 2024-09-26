import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Navbar from "./Pages/Navbar/index";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
