import React from 'react'
import '../Styels/links.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsGlobe} from "react-icons/bs"
function Links() {
  return (
    <div id='LinksContainer'>
        <div id='Links_headin_container'>
            <p>ON THE WEB</p>
            <button>EDIT</button>
        </div>
        <div id='Links_input_conatinaere'>
            {/* == */}
            <div>
            <label ><AiFillLinkedin/> Linked In</label>
            <br />
            <input type="text" className='Links_Inputs'  id='linkedin' placeholder="Linked In" />
            </div>
            {/* == */}
            {/* == */}
            <div>
            <label ><AiFillGithub/>Github</label>
            <br />
            <input type="text" className='Links_Inputs'  id='github' placeholder="Github" />
            </div>
            {/* == */}
            {/* == */}
            <div>
            <label ><AiFillInstagram/>Instagrame</label>
            <br />
            <input type="text" className='Links_Inputs'  id='linkedin' placeholder="Instagrame" />
            </div>
            {/* == */}
            {/* == */}
            <div>
            <label ><AiFillFacebook/>Face Book</label>
            <br />
            <input type="text" className='Links_Inputs'  id='linkedin' placeholder="Facebook" />
            </div>
            {/* == */}
            {/* == */}
            <div>
            <label ><AiFillTwitterCircle/>Twitter</label>
            <br />
            <input type="text" className='Links_Inputs'  id='linkedin' placeholder="Twitter" />
            </div>
            {/* == */}
            {/* == */}
            <div>
            <label ><BsGlobe/>Website</label>
            <br />
            <input type="text" className='Links_Inputs'  id='linkedin' placeholder="Website" />
            </div>
            {/* == */}
        </div>
    </div>
  )
}

export default Links