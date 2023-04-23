import React, { useState } from "react";
import "../Styels/map.css";
function Map() {
  // const [selected, setSelected] = useState([]);

  let selected = [
    55, 107, 159, 211, 263, 56, 57, 58, 59, 267, 266, 265, 264, 61, 113, 165,
    217, 269, 166, 167, 168, 169, 117, 65, 221, 273, 275, 223, 171, 119, 67, 68,
    69, 70, 71, 123, 175, 227, 279, 172, 173, 174, 73, 125, 177, 229, 281, 74,
    127, 180, 233, 286, 234, 182, 130, 78, 80, 132, 184, 236, 288, 81, 134, 187,
    240, 293, 241, 189, 137, 85, 87, 139, 191,192, 243, 295, 88, 89, 90, 91, 143,
    195, 247, 299, 194, 193,
  ];
  function handleBoxClick(index) {
    // setSelected([...selected, index]);
    console.log(index);
  }
  return (
    <div id="Map_container">
      <div><p>CIPHER CALENDER</p></div>
      <div id="Moth_container">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
          <p>Jul</p>
          <p>Aug</p>
          <p>Sep</p>
          <p>Oct</p>
          <p>Nov</p>
          <p>Dec</p>
        </div>
      <div id="calender_container">
       
        {[...Array(365)].map((e, i) => {
          return (
            <div
              className={`EachBox ${selected.includes(i) ? "selected" : ""}`}
              onClick={() => handleBoxClick(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Map;
