import React from 'react'
import experience from "./data/experience.json"
const Experience = () => {
  return (
    <>
    <div className="container ex" data-aos="zoom-in" data-aos-duration="1000" id='experience'>
        <h1 style={{color:'rgb(15, 215, 68)'}}>EXPERINCE</h1>
    </div>
    <div className='container exx'>
    {
      experience.map((data)=>{
        return(
          <>
          <div key={data.id} className='ex-items text-center'
          data-aos="zoom-in" data-aos-duration="1000">
            <div className='left'>
              <img src="" alt="" />
            </div>
            <div className='right '>
             <h2>{data.role}</h2>
             <h4>{data.start} {data.enddate} {data.location}</h4>
             <h5>{data.experience[0]}</h5>
             <h5>{data.experience[1]}</h5>
            </div>
          </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Experience;
