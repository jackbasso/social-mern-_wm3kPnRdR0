import React from 'react';
import "./navbar.css";
import searchIcon from "../Images/search1.png";
import Notifications from "../Images/bell.png";
import Message from "../Images/message.png";
import Profile from "../Images/profile.png";

export default function Navbar() {
  return (
    <div className="mainNavbar">
      <div className='LogoContainer'>
        <p>Social</p>
      </div>
      <div>
        <div className='searchInputContainer'>
          <img src={`${searchIcon}`} className="searchIcons"  alt="" />
          <input type="text" className="searchInput" placeholder='search your friend' name="" id="" />
        </div>
      </div>
      <div className='IconsContainer'>
        <img src={`${Notifications}`} className="Icons" alt="" />
        <img src={`${Message}`} className="Icons" alt="" />
        <div style={{display:'flex', alignItems:'center'}}>
          <img src={`${Profile}`} className="ProfileImage" alt="" />
          <p style={{marginLeft:'5px'}}>Jack</p>
        </div>
      </div>

    </div>
  )
}
