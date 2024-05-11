// import React from 'react'
// import web from './images/im1.svg'

// const Home = () => {
//   return (
//     <>
//       <section id="header" className=''>
//         <div className='constainer-fluid nav_bg'>
//           <div className="row">
//             <div className="col-10 mx-auto">
//               <div className="row">
//                 <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
//                   <h1>Grow Your Business with <strong className='brand-name'>Develpers</strong></h1>
//                   <h2 className='my-3'>
//                     We are the team of super talented developers making websites.
//                   </h2>
//                   <div className='mt-3'>
//                     <a href="" className='btn btn-outline-primary'>Get Started</a>
//                   </div>
//                   <div className='col-lg-6 order-1 order-lg-2 header-img'>
//                     <img src={web} alt="home img" className='img-fluid animated' />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home
import React from 'react';
import Common from './Common';

const Home = () => {
  return (
    <>
     <Common title="Grow your Business With" but="Get Started" loc="/service"/>
    </>
  )
}

export default Home;
