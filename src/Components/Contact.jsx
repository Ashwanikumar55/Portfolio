import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
  <>
  <div className='container contact'data-aos="zoom-in-up" data-aos-duration="1000" id='contact'>
    <h1 style={{color:'rgb(15, 215, 68)'}}>Contact</h1>
     <div className='container contact-icon'>
        <a href='https://www.instagram.com/ashwani_gautam111/'className='items'>
            <BsInstagram  className='icons' />
        </a>
        <a href='http://www.facebook.com/Ashwani Jaiswal/' className='items'>
        <SiFacebook className='icons' />
        </a>
        <a href='https://wa.me/8847674165/' className='items'>
        <FaWhatsapp className='icons'/>
        </a>
        <a href='mailto:ashwaniarya493@gmail.com/'className='items'>
            <SiGmail className='icons' />
        </a>
        <a href='https://www.linkedin.com/ashwani-kumar/' className='items'>
        <FaLinkedin className='icons' />
        </a>
    </div>
  </div>
  </>
  )
}

export default Contact
