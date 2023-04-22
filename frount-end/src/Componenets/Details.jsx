import React from 'react'
import '../Styels/details.css'
function Details() {
  return (
    <>
    <br />
    <div id='Details'>
       <div id='Profile_Details_container'>
        <img src="https://lh3.googleusercontent.com/a/AGNmyxY3MQde5F8U2SCDVozup1MfBjYiNULah9OibJEe2g=s96-c" alt="" />
        <div id='User_Info_container'>
           <p><span className='UserText'>Hello,</span><br /> <span id='User_name'>Channakeshav N </span> <br /><span className='UserText'>keshavachanna47@gmail.com</span></p>
        </div>
       </div>
       <div id='Fallowers_container'>
        <p className='UserText'>Falloer 0</p>
       </div>
    </div>
    </>
    
  )
}

export default Details