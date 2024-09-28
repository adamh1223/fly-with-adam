import React from "react";
import "./Reset.css";
import "../src/Pages/Navbar/Navbar.css";
import { Navbar } from "./Pages/Navbar/Navbar.jsx";
import { useGlobalContext } from "./Pages/Navbar/Context.jsx";
import Submenu from "./Pages/Navbar/Submenu.jsx";

function App() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <>
      <main>
        <Navbar />
        <Submenu />
      </main>
    </>
  );
}

export default App;
