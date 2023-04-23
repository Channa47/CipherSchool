import { useState } from "react";
import "./App.css";
import Abountme from "./Componenets/Abountme";
import Details from "./Componenets/Details";
import Interest from "./Componenets/Interest";
import Links from "./Componenets/Links";
import Map from "./Componenets/Map";
import Navbar from "./Componenets/Navbar";
import ProfInfo from "./Componenets/ProfInfo";
import Password from "./Componenets/password";
import Profile from "./Pages/Profile";

function App() {
  // const init = {
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // }

  return (
    <div className="App">
       <Profile/>
    </div>
  );
}

export default App;
