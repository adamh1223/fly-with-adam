import React from "react";
import "./Reset.css";
import "../src/Pages/Navbar/Navbar.css";
import Navbar from "./Pages/Navbar/Navbar.jsx";
import { useGlobalContext } from "./Pages/Navbar/Context.jsx";

function App() {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <>
      <main>
        <Navbar />
      </main>
    </>
  );
}

export default App;
