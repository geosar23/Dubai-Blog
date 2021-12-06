import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Home from './Home'
import Header from './Header'
import BlogDetails from './BlogDetails'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

const url= 'https://firefighter-5325.instashop.ae/api/landmarks'


function App() {
  const [loading,setLoading]=useState(true)
  const [blogs,setBlogs]=useState([])
  const [user,setUser]=useState()

  const fetchBlogs= async () => {
    setLoading(true)

    try{
      const response=await fetch(url)
      const blogs=await response.json()
      console.log(response)
      setLoading(false)
      setBlogs(blogs)
    }catch(error){
      setLoading(false)
      console.log(error)
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
      <main>
      <Routes>

        <Route exact path='/' element={ <Home blogs={blogs} user={user}/>}/>
        <Route exact path='/blog/:blogId' element={<BlogDetails blogs={blogs}/>}/>
       
      </Routes>
      </main>
    </Router>    
  )
}

export default App
