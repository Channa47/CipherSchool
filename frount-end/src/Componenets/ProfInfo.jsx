import React from "react";
import "../Styels/Profinf.css";
function ProfInfo() {
  return (
    <div id="Peofession_container">
      <div id="Peofession_container_header">
        <p>PROFFESIONAL INFORMATION</p>
        <button>EDIT</button>
      </div>
      <div id="Peofession_container_inputs">
        <div>
          <label htmlFor=""></label>
          <select name="" id="">
            <option value="">Primary</option>
            <option value="">Secondary</option>
            <option value="">Higher Secondary</option>
            <option value="">Graduation</option>
            <option value="">Post Graduation</option>
          </select>
        </div>
        <div>
          <label htmlFor=""></label>
          <select name="" id="">
            <option value="">Schooling</option>
            <option value="">College Student</option> 
            <option value="">Teaching</option>
            <option value="">Job</option> 
            <option value="">Freelancing</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProfInfo;
