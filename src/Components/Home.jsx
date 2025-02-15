import React from 'react';
import Pdf from '../pdf/ashwani.pdf';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

const Home = () => {
  const [text] =useTypewriter({
    words:['Welcome to My Porfile', 'My name is Ashwani Kumar', 'Frontend developer','Full stack Developer'],
    loop:0,
    typeSpeed:80,
    backSpeed:80,
    deleteSpeed:80
  })
 
  return (
    <>
    <div className='container about'data-aos="fade-right" data-aos-duration="1000" id='about'>
    <h1>ABOUT</h1>
    </div>
    <div className='container home'data-aos="fade-up-right" data-aos-duration="1000">
      <div className='left'>
        <h1><span style={{color:"#16C47F", fontWeight:"bold"}}>{text}<Cursor/></span></h1>
        <a href={Pdf} download='ashwani.pdf'className="btn btn-outline-success my-4 fs-4">Download Resume</a>
      </div>
      <div className='right'>
        <div className='img'data-aos="fade-down-left" data-aos-duration="1000">
        <img src='./Photos/ash.png' alt='Ashwani'/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home;
