import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Home from './Home'
import Header from './Header'


const dummyURL = 'https://course-api.com/react-tours-project'
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
    <div>
      <Header setUser={setUser}/>
      <main>
        <Home blogs={blogs} user={user}/>
      </main>
    </div>
    
  )
}

export default App
