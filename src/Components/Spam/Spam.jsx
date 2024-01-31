import React from 'react'
import icon from './../../assets/Images/Icon.svg'
import './Spam.css'
const Spam = () => {
  return (
    <div>
        <div className='Spam'>
         <div className='TopSpam'>
           <div> <img src={icon}></img></div>
           <div> <h1>   This message seems dangerous</h1></div>
         </div>
         <div className='DownSpam'>
            <p>
            Similar messages were used people’s personal information. Avoid clicking links, downloading attachments, or replying with personal information.
            </p>
         </div>
         <div className='Button'>
            <button>Looks Safe</button>
         </div>
        </div>
    </div>
  )
}

export default Spam