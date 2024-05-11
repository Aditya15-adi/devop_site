import React, { useState } from 'react'

const Contact = () => {
  const [data,setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:""});
  const formsubmit=(e)=>{
    e.preventDefault();
    alert(`name is ${data.fullname} and phone no. is ${data.phone} email is ${data.email} msg is ${data.msg}`)
  }
  const Ipevent=(event)=>{
    const {name,value}=event.target;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]:value
      };
    });
  }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label  className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={Ipevent}
                  placeholder="Enter Name" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Phone NUmber</label>
                <input 
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={Ipevent}
                  placeholder="Phone Number" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Email</label>
                <input 
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={Ipevent}
                  placeholder="name@gmail.com" />
              </div>
              <div className="mb-3">
                <label  className="form-label">Message</label>
                <textarea className="form-control" 
                id="exampleFormControlTextarea1" 
                rows="3"
                name="msg"
                value={data.msg}
                onChange={Ipevent}>

                </textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;
