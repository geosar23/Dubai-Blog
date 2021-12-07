import React ,{ useState }from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import * as blogService from '../services/blog'

const BlogDetails = ({user, blog ,setBlogs}) => {
  const [editedBlog,setEditedBlog]=useState({
    objectId:blog.objectId,
    title:blog.title,
    short_info:blog.short_info
  })

  async function updateBlog(e){
    e.preventDefault()
    try {
      await blogService.updateBlog(editedBlog,user)
      const response=await blogService.getBlogs()
      setBlogs(response)
    } catch (error) {
      console.error(error)
    }
  }


  const editBlog = (
    <form onSubmit={updateBlog} className="edit-popup">
      <label>Title</label>
      {/* /Override the title property/ */}
      <input value={editedBlog.title} onChange={(e)=>setEditedBlog({...editedBlog,title:e.target.value})}></input>

      <label>Info</label>
      <input value={editedBlog.short_info} onChange={(e)=>setEditedBlog({...editedBlog,short_info:e.target.value})}></input>

      {/* <label>Latitude</label>
      <input value={details.location[0]}></input>

      <label>Longitude</label>
      <input value={details.location[1]}></input>

      <label>url</label>
      <input value={details.url}></input> */}

      <button type="submit" className="edit-btn">Edit</button>
    </form>
  )

    return(
      <article className="single-blog">

        <Link to={blog.photo.url} element={<img src={blog.photo.url} alt={blog.title}></img>}><img src={blog.photo.url} alt={blog.title}></img></Link>
        <footer>
          <div className="blog-info">
            <h4>{blog.title}</h4>
            
            <h4 className="blog-price"><i className="fas fa-map-marker-alt"></i> {blog.location[0]} , {blog.location[1]}</h4>
          </div>
          <p>{blog.short_info}</p>
          <a target="_blank" rel="noreferrer" href={blog.url}>{blog.url}</a>
          <Map lat={blog.location[0]} lng={blog.location[1]}/>
          {user && editBlog}        
        </footer>

      </article>
    )
  }

  export default BlogDetails