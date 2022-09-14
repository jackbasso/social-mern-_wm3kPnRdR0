import React from 'react';
import "./contentpost.css";
import profileimage from "../Images/profile.png"

export default function ContentPost() {
  return (
    <div>
      <div className="ContentUploadContainer">
      <div style={{display:"flex", alignItems:"center"}}>
        <img src={`${profileimage}`} className="profileimage"  alt="" />
        <input type="text" className='contentWritingpart' ></input>
      </div>
      </div>
    </div>
  )
}
