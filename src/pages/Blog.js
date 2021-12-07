import React from "react";
import { useParams } from "react-router-dom";
import BlogDetails from "../components/BlogDetails";

const Blog = ({blogs, setBlogs, user}) => {
  
  const params=useParams()
  const currentBlog= blogs.find((blog)=>blog.objectId===params.blogId)

    return(
      <div>
        {currentBlog && <BlogDetails user={user} setBlogs={setBlogs} blog={currentBlog}/>}
      </div>
    )
}

export default Blog