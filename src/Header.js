import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const url='https://firefighter-5325.instashop.ae/api/users/login'

const Header = ({user, setUser}) => {

  const [showPopup,setShowPopup]=useState(false)



  async function signIn(e){

    const url='https://firefighter-5325.instashop.ae/api/users/login'


    e.preventDefault()
    console.log('hey steve',e.target.username.value)
    console.log('hey saros',e.target.password.value)

    try {
      const response=await fetch(url, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        credentials:'include',
        mode:'cors',
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

  async function signOut(){

    const url='https://firefighter-5325.instashop.ae/api/users/logout'

    try{
      await fetch(url,{
        credentials:'include'
      })
      setUser()
    }catch (error){
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
      <Link to='/'><div className="logo_home"><i className="fas fa-home fa-3x"><h4>HOME</h4></i></div></Link>
    
      <div className="signIn">
        {user
          ? <button className="btn" onClick={signOut}>Sign Out</button>
          : <button className="btn" onClick={()=>setShowPopup(true)}>Sign In</button>
        }

        {showPopup && <Popup/>}

      </div>
    </div>
  );
};

export default Header;
