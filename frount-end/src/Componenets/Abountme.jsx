import React, { useState } from 'react'
import '../Styels/about.css'
function Abountme() {
  const [isEnabel , setisEnable] = useState(false)
 const [butnTxt, setbtnTxt] = useState(false)
  const SaveDescription =(e) => {
    setisEnable(!isEnabel)
    setbtnTxt(!butnTxt);
    if(e.target.innerHTML === "SAVE"){
       console.log("API REquest")
    }
  }
  return (
    <div id='About'>
       <div id='About-child-First'>
         <p>ABOUT ME</p>
         <button onClick={(e)=>SaveDescription(e)}>{butnTxt?"SAVE":"EDIT"}</button>
       </div>
       <div id='About-child-second'>
        <textarea className={isEnabel ? "textarea-editable" : "textarea-not-editable"} name="" id="" cols="30" rows="10"></textarea>
       </div>
    </div>
  )
}

export default Abountme