import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as userService from '../services/user';

const Header = ({user, setUser}) => {
  const [showPopup,setShowPopup]=useState(false)
  const [errorIn,setErrorIn]=useState()
  const [errorOut,setErrorOut]=useState()

  async function signIn(e){
    e.preventDefault()
    setErrorIn()
    const username = e.target.username.value
    const password = e.target.password.value
    try {
        const response = await userService.signIn(username, password)
        setUser(response)
        setShowPopup(false)
        localStorage.setItem('user', JSON.stringify(response))
    } catch (error) {
      if(error.message==101){
        setErrorIn('Invalid username or password')
      }else{
        setErrorIn('Sorry something went wrong')
      }
    }
  }


  async function signOut(){
    setErrorOut()
    try {
      await userService.signOut(user)
      setUser()
      localStorage.clear()
    } catch (error) {
      setErrorOut(error)
    }
  }

  function handlePopUpClose(){
    setShowPopup(false)
    setErrorIn()
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

            {errorIn && <div style={{color:"red"}}>{errorIn}</div> }

            <button type="submit" className="btn">Login</button>
            <button type="button" className="btn cancel" onClick={handlePopUpClose}>Close</button>
          </form>
        </div>
    )
  }

  return (
    <div className="header">
      <Link to='/'><div className="logo_home"><i className="fas fa-home fa-3x"><h4>HOME</h4></i></div></Link> 
      <div className="signIn">
        {user
          ? <button className="header-btn" onClick={signOut}>Sign Out</button>
          : <button className="header-btn" onClick={()=>setShowPopup(true)}>Sign In</button>
        }
        {showPopup && <Popup/>}
      </div>
      {errorOut && <div style={{color:"red"}}>{errorOut+" logout failed"}</div>}
    </div>
  );
};

export default Header;
