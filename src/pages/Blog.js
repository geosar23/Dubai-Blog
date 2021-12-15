import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import * as blogService from '../services/blog'
import Loading from "../components/Loading";

const Blog = ({blogs, setBlogs, user}) => {
  
  const params=useParams()
  const [selectedBlog,setSelectedBlog]=useState()
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState()

  async function fetchData(){
    setError()
    try {
      const response = await blogService.getBlog(params.blogId)
      setSelectedBlog(response)
    } catch (error) {
      setError(error+' something is missing')
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[blogs])

  const errorDiv = (
    <div className='errorDiv'>
      <h2>{error}</h2>
      <img src="../error.png" alt="error-img"></img>
    </div>
  )

    return(
      <div>
        {error && errorDiv}
        {loading
          ? <Loading/>
          : selectedBlog && <BlogDetails user={user} setBlogs={setBlogs} blog={selectedBlog}/>}
      </div>
    )
}

export default Blog