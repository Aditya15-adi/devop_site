import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
         <div className="col-md-4 col-10 mx-auto">
                <div className="card  align-item-center " >
                  <img src={props.imgsr} className=" card-img-top justify-content-center " alt="..." style={{width:"250px", height:"250px", margin:"0 30px"}}/>
                    <div className="card-body">
                      <h5 className="card-title">{props.domain}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <p>By:-{props.name}</p>
                      <NavLink  to={props.weblink} className="btn btn-outline-primary">Website</NavLink>
                    </div>
                </div>
              </div>
    </>
  )
}

export default Card;
