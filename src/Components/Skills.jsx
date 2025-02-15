import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return(
    <>
    <div className="container sk " id='skill'>
    <h1 style={{color:'rgb(15, 215, 68)'}}>SKILLS</h1>
    <div className=" container items" data-aos="flip-up" data-aos-duration="1000">
    {
      skills.map((data)=>{
        return(
  <>
  <div className='item'key={data.id} >
<img src={`/images/${data.image}`}alt="jkbhjv" />
<h3>{data.title}</h3>
  </div>
  </>
      )})}
    </div>
    </div>
    </>
  )
}

export default Skills
