import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";
import * as blogService from '../services/blog'
import Loading from "../components/Loading";

const Blog = ({blogs, setBlogs, user}) => {
  
  const params=useParams()
  const [selectedBlog,setSelectedBlog]=useState()
  const [loading,setLoading]=useState(true)

  async function fetchData(){
    try {
      const response = await blogService.getBlog(params.blogId)
      setSelectedBlog(response)
    } catch (error) {
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[blogs])

    return(
      <div>
        {loading
          ? <Loading/>
          : selectedBlog && <BlogDetails user={user} setBlogs={setBlogs} blog={selectedBlog}/>}
      </div>
    )
}

export default Blog