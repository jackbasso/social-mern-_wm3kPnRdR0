import React from 'react';
import ads from '../Images/ads.jpg';
import ads2 from '../Images/ads2.jpg';
import ads3 from '../Images/ads3.png';
import profile from '../Images/addFriend.png';
import image2 from '../Images/img2.jpg';
import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={`${ads}`} className="adsimg" alt='' />
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20}}>MonkeyJack</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', marginTop:'-16px'}}>Buy MonkeyJack course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${ads2}`} className="adsimg" alt='' />
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20}}>MonkeyJack</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', marginTop:'-16px'}}>Buy MonkeyJack course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${ads3}`} className="adsimg" alt='' />
          <div>
            <p style={{textAlign:'start', marginLeft:'10px', marginTop:-20}}>MonkeyJack</p>
            <p style={{textAlign:'start', marginLeft:'10px', fontSize:'12px', marginTop:'-16px'}}>Buy MonkeyJack course</p>
          </div>
        </div>
      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:'start', marginLeft:'10px' }}>Suggested for you</h3>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Juan Daniel</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Lorena Ruiz</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Jack Baso</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Jack Baso</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Jack Baso</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
        <div style={{marginTop:'-5px'}}>
          <div style={{display:'flex', alignItem:'center', justifyContent:'space-between'}}>
            <div style={{display:'flex', alignItem:'center'}}>
            <img src={`${image2}`} className='profileImage' alt='' />
              <div>
                <p style={{marginLeft: '10px',textAlign:'start'}}>Karina Baso</p>
                <p style={{marginLeft: '10px',textAlign:'start', marginTop:'-16px', fontSize:'9px', color:'#aaa'}}>Suggested for you</p>
              </div>
          </div>
          <div style={{marginRight:'15px', cursor: 'pointer'}}>
            <img src={`${profile}`} className='addFriend' alt='' />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
