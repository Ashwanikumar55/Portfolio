import React from 'react'

const Navbar = () => {
  return (

    <>
    <div className=' container navbar ' data-aos="fade-right" data-aos-duration="1000" id="home">
        <div className='left nav_items fs-1' style={{color:"#F29F58"}} >Ashwani Kumar</div>
        <div className='right'>
            <a href="#home" className="nav_items ">Home</a>
            <a href="#about" className="nav_items">About</a>
            <a href="#experience" className="nav_items">Experience</a>
            <a href="#skill" className="nav_items">Skills</a>
            <a href="#project" className="nav_items">Project</a>
            <a href="#contact" className="nav_items">Contact</a>
        </div>
       </div>
  
    </>

  )
}

export default Navbar;