import React, { useEffect, useState } from "react";
import "../Styels/navbar.css";
import Logo from "../Images/CupherLogo.png";
import { AiTwotoneBell } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.body.style.backgroundColor =
      newTheme === "light" ? "white" : "rgb(30, 45, 72)";
  };
  return (
    <>
    {/* Bg Screen Navabr */}
    <div id="Full_navbar">
      <div className="Logo_Container ">
        <img src={Logo} alt="" />
        <select name="" id="">
          <option value="" disabled selected hidden>
            &#x261B; Brouse
          </option>
          <option value="">App Development</option>
          <option value="">Web Development</option>
          <option value="">Game Development</option>
          <option value="">Data Sctructures</option>
          <option value="">Programming</option>
          <option value="">Machine Learning</option>
          <option value="">Data Science</option>
          <option value="">Others</option>
        </select>
      </div>
      <div className="NavItems_Container">
        <input type="text" placeholder="🔎 Search and Learn" onClick={()=>console.log("Channa")} />
        <p>
          <AiTwotoneBell />
        </p>

        <img
          src="https://lh3.googleusercontent.com/a/AGNmyxY3MQde5F8U2SCDVozup1MfBjYiNULah9OibJEe2g=s96-c"
          alt=""
        />
        <p>
          <FaCoins />
        </p>
        <label className="switch">
          <input
            type="checkbox"
            id="ToogleInput"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
    </>
  );
}

export default Navbar;
