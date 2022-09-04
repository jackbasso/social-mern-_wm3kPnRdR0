import React from 'react';
import Leftbar from '../../Component/LeftSideContainer/Leftbar.js';
import MainPost from '../../Component/MainPostContainer/MainPost.js';
import Navbar from '../../Component/Navbar/Navbar.js';
import Rightbar from '../../Component/RightSideContainer/Rightbar.js';
import "./home.css";

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className='ComponentContainer'>
        <Leftbar />
        <MainPost />
        <Rightbar />
      </div>
    </div>
  )
}
