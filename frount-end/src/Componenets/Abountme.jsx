import React, { useEffect, useState } from 'react'
import '../Styels/about.css'
import axios from 'axios'
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
  let user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  const [useDetails , setUserDetails] = useState({});

  useEffect(()=>{
    if(user){
      axios.get(`https://cipher-gne4.onrender.com/info/details/${user._id}`)
      .then((r)=>{
        console.log(r);
      })
      .catch((e)=>{
        console.log(e)
      })
    }
  },[user])
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