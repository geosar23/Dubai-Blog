import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

const Blog = ({blogs,user}) => {
  
  const params=useParams()

  const [currentBlog,setCurrentBlog]=useState()

    useEffect( () => {
      const selectedBlog = blogs.find((blog)=>blog.objectId===params.blogId)
      setCurrentBlog(selectedBlog)
    },[])

    return(
      <div>
        {currentBlog && <BlogDetails user={user} blog={currentBlog}/>}
      </div>
    )
}

export default Blog