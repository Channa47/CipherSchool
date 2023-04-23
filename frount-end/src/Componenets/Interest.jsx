import React, { useState } from "react";
import "../Styels/int.css";
function Interest() {
  const [showModal, setshowmodal] = useState(false);
  const HandleClick = (e) => {
    setshowmodal(!showModal);
  };
  const [Interest, setInterest] = useState([]);
  const HandleinterestClick = (e) => {
    // Check if the clicked interest already exists in the state array
    let item = e.target.innerHTML;
    const index = Interest.indexOf(item);
    if (index !== -1) {
      // If it exists, remove it from the array
      const updatedInterest = [...Interest];
      updatedInterest.splice(index, 1);
      setInterest(updatedInterest);
    } else {
      // If it doesn't exist, add it to the array
      setInterest([...Interest, item]);
    }
  };

  const SaveData = () => {
    console.log(Interest);
    //  API REQUEST
    setshowmodal(!showModal)
  };
  return (
    <>
      <div id={showModal ? "Show_Interest_modal" : "Hide_Interest_modal"}>
        <div id="Show_interest_Modal_parent">
          <div id="Show_interest_Modal_Elements">
            <div
              className={
                Interest.includes("App Development")
                  ? "Selected_ShowColr"
                  : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              App Development
            </div>
            <div
              className={
                Interest.includes("Web Development")
                  ? "Selected_ShowColr"
                  : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Web Development
            </div>
            <div
              className={
                Interest.includes("Game Development")
                  ? "Selected_ShowColr"
                  : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Game Development
            </div>
            <div
              className={
                Interest.includes("Data Structure")
                  ? "Selected_ShowColr"
                  : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Data Structure
            </div>
            <div
              className={
                Interest.includes("Programming") ? "Selected_ShowColr" : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Programming
            </div>
            <div
              className={
                Interest.includes("Machine Learning")
                  ? "Selected_ShowColr"
                  : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Machine Learning
            </div>
            <div
              //   className={addBgColor && "Selected_ShowColr"}
              className={
                Interest.includes("Data Science") ? "Selected_ShowColr" : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Data Science
            </div>
            <div
              className={
                Interest.includes("Others") ? "Selected_ShowColr" : "null"
              }
              onClick={(e) => HandleinterestClick(e)}
            >
              Others
            </div>
          </div>
          <div id="Interest_modal_btn_container">
            <button onClick={() => setshowmodal(false)}>CANCEL</button>
            <button onClick={SaveData}>SAVE</button>
          </div>
        </div>
      </div>
      <div id="interset_container">
        <p>INTEREST</p>
        <button onClick={(e) => HandleClick(e)}>Edit</button>
      </div>
    </>
  );
}

export default Interest;
