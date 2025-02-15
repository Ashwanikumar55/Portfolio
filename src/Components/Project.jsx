import React from 'react'
import projects from './data/projects.json'
const Project = () => {
  return (
    <>
    <div className="container project my-3" id='project'>
        <h1 style={{color:'rgb(15, 215, 68)'}}>PROJECTS</h1>
        <div className='row d-flex justify-content-center align-item-center'data-aos="flip-right" data-aos-duration="1000">
        {
            projects.map((data)=>(
                <>
                 <div key={data.id} className='my-3 col-sm-6 col-md-4 col-lg-3 mx-3'>
                <div className="card s" style={{width:'18rem',background:'linear-gradient(rgb(19, 1, 1),rgb(40, 192, 106))',boxShadow:'5px 5px 15px 5px  rgba(45, 250, 65, 0.992)',color:'black',fontSize:"20px"}}>
                  <div className='sk-image d-flex justify-content-center align-item-center p-3'>
  <img src={data.image} className="card-img-top" style={{width:'250px', height:'200px',border:'1px solid rgb(40, 192, 106) ',}} alt="..."/>
  </div>
  <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text">{data.Description}</p>
    <a href={data.demo} className="btn btn-primary  mx-3">View</a>
    <a href={data.source} className="btn btn-primary  mx-3">Code</a>
  </div>
</div>
                    </div> 
                </>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default Project
