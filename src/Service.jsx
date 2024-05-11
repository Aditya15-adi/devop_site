import React from 'react'
import Card from './Card';
import Sdata from "./Sdata"

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid nav_bg'>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
             {/* <Card imgsr={web} domain="React.js" name="Aditya" weblink={link1}/>
             <Card imgsr={web1} domain="Node.js" name="Thapa"weblink={link1}/>
             <Card imgsr={web} domain="Java.js" name="Harry"webink={link1}/>
             <Card imgsr={web1} domain="JSP Servelet" name="Babbar" weblink={link1}/>
             <Card imgsr={web} domain="Spring Boot" name="Jenny" weblink={link1}/>
             <Card imgsr={web1} domain="Spring Boot" name="Jenny" weblink={link1}/> */}
             {Sdata.map((val,index)=>{
                return <Card key={index} imgsr={val.imgsr} domain={val.domain} weblin={val.weblink} name={val.name}/>
             })
            }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
