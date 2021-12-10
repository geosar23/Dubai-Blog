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

  const fetchBlogs= async () => {
    setLoading(true)
    try{
      const response =await blogService.getBlogs()
      setBlogs(response)
    }catch(error){  
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  if(loading){
    return <main>
      <Loading/>
    </main>
  }

  return (
    <Router> 
      <Header setUser={setUser} user={user}/>
      <Routes>
        <Route exact path='/' element={ <Home blogs={blogs}/>}/>
        <Route exact path='/blog/:blogId' element={<Blog blogs={blogs} setBlogs={setBlogs} user={user}/>}/>      
      </Routes>
    </Router>    
  )
}

export default App
