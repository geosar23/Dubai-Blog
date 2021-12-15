import React, { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Home from './pages/Home'
import Header from './components/Header'
import Blog from './pages/Blog'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import * as blogService from './services/blog'



function App() {
  const [loading,setLoading]=useState(true)
  const [blogs,setBlogs]=useState([])
  const [user,setUser]=useState()
  const [error,setError]=useState()

  const fetchBlogs= async () => {
    setLoading(true)
    setError()
    try{
      const response =await blogService.getBlogs()
      setBlogs(response)
    }catch(error){  
      setError(error +' something is missing')
      setBlogs([])
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if(loading){
    return <main>
      <Loading/>
    </main>
  }

  const errorDiv = (
    <div className='errorDiv'>
      <h2>{error}</h2>
      <img src="error.png" alt="error-img"></img>
    </div>
  )

  return (
    <Router> 
      <Header setUser={setUser} user={user}/>
      <Routes>
        <Route exact path='/' element={error ? errorDiv : <Home blogs={blogs}/>}/>
        <Route exact path='/blog/:blogId' element={<Blog blogs={blogs} setBlogs={setBlogs} user={user}/>}/>      
      </Routes>
      {/* {blogs.length===0 && error && errorDiv} */}
      <div className='footer'></div>
    </Router>    
  )
}

export default App
