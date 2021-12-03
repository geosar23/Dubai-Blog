import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const url='https://firefighter-5325.instashop.ae/api/users/login'

const Header = ({setUser}) => {

  const [showPopup,setShowPopup]=useState(false)

  async function signIn(e){
    e.preventDefault()
    console.log('hey steve',e.target.username.value)
    console.log('hey saros',e.target.password.value)

    try {
      const response=await fetch(url, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: e.target.username.value,
          password: e.target.password.value
        })
      })
      const body=await response.json()
      setUser(body.userId)
      setShowPopup(false)
      console.log(body)
    } catch (error) {
      console.error(error)
    }

  }

  const Popup = () => {
    return(
      <div className="form-popup" id="myForm">
          <form onSubmit={signIn} className="form-container">
            <h1>Login</h1>

            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your username"  required/>

            <label>Password</label>
            <input type="password" name="password" placeholder="Enter Password"  required/>
      

            <button type="submit" className="btn">Login</button>
            <button type="button" className="btn cancel" onClick={()=>setShowPopup(false)}>Close</button>
          </form>
        </div>
    )
  }

  return (
    <div className="header">
      <a href="#default" className="logo">InstaBlog</a>
      <div className="header-right">
        <a className="active" href="#home">Sign In</a>

        <button className="open-button" onClick={()=>setShowPopup(true)}>Open Form</button>

        {showPopup && <Popup/>}

      </div>
    </div>
  );
};

export default Header;
