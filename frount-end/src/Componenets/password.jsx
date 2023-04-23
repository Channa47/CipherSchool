import React from 'react'
import '../Styels/pass.css'
import {RiLockPasswordFill} from 'react-icons/ri'
function Password() {
  return (
    <div id='password_container'>
        <div id='password_container_header'>
            <p>PASSWORD & SECURITY</p>
            <button>Change</button>
        </div>
        <div id='password_container_input'>
            <label htmlFor=""><RiLockPasswordFill/> Password</label>
            <br />
            <input type="text" placeholder='...............' />
        </div>
    </div>
  )
}

export default Password