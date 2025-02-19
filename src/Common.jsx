import React from 'react';
import web from './images/im1.svg';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className='d-flex align-item-center'>
        <div className='container-fluid nav_bg'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column'>
                  <h1>{props.title} <strong className='brand-name'>Developers</strong></h1>
                  <h2 className='my-3'>
                    We are the team of super talented developers making websites.
                  </h2>
                  <div className='mt-3'>
                    <NavLink to={props.loc} className='btn btn-outline-primary'>{props.but}</NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={web} alt="home img" className='img-fluid animated' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;
