import React from 'react';
import "./leftbar.css";
import image from "../Images/profile.png";
import image1 from "../Images/yo.jpg";
import image2 from "../Images/img2.jpg";
import image3 from "../Images/img3.jpg";
import image4 from "../Images/img4.jpg";
import image5 from "../Images/img5.jpg";

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className='NotificationsContainer'>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <p style={{marginLeft:'-14px'}}>Notifications</p>
          <p style={{color:'#aaa', marginLeft:'40px'}}>See all</p>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Karina like your post</p>
          <img src={`${image1}`} className='likeimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Claudia started to following you</p>
          <img src={`${image1}`} className='followinguserimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Melissa like your post</p>
          <img src={`${image1}`} className='likeimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Claudia started to following you</p>
          <img src={`${image1}`} className='followinguserimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Karina like your post</p>
          <img src={`${image1}`} className='likeimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Claudia started to following you</p>
          <img src={`${image1}`} className='followinguserimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Karina like your post</p>
          <img src={`${image1}`} className='likeimage' alt='' />
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
          <img src={`${image}`} className='notificationimg' alt='' />
          <p style={{marginLeft: '5px',color:'#aaa',fontSize:13, textAlign:'start',width:'120px', marginTop:-10}}>Karina like your post</p>
          <img src={`${image1}`} className='likeimage' alt='' />
        </div>
      </div> 

      <div className='NotificationsContainer'>
        <div style={{display:'flex', justifyContent:'space-around'}}>
          <p style={{marginLeft:'-20px'}}>Explores</p>
          <p style={{color:'#aaa',marginLeft:'40px'}}>See all</p>
        </div>
        <div >
          <img src={`${image2}`} className='exploreimage' alt='' />
          <img src={`${image3}`} className='exploreimage' alt='' />
          <img src={`${image4}`} className='exploreimage' alt='' />
          <img src={`${image5}`} className='exploreimage' alt='' />
          <img src={`${image2}`} className='exploreimage' alt='' />
          <img src={`${image4}`} className='exploreimage' alt='' />
          <img src={`${image5}`} className='exploreimage' alt='' />
          <img src={`${image4}`} className='exploreimage' alt='' />
          <img src={`${image3}`} className='exploreimage' alt='' />
          <img src={`${image5}`} className='exploreimage' alt='' />
          <img src={`${image4}`} className='exploreimage' alt='' />
          <img src={`${image3}`} className='exploreimage' alt='' />
        </div>
      </div>   
    </div>
  )
}
