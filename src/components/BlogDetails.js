import React ,{ useState }from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import * as blogService from '../services/blog'
import Popup from "./Popup";

const BlogDetails = ({user, blog ,setBlogs}) => {
  const [popUp,setPopUp]=useState(false)
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
    <form onSubmit={updateBlog} className="edit-btn-container">
      <button type="submit" className="edit-btn" onClick={()=>setPopUp(true)}>Edit</button>
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
          <Popup trigger={popUp} setPopUp={setPopUp} updateBlog={updateBlog} editedBlog={editedBlog} setEditedBlog={setEditedBlog}>
            <h3>My PopUp</h3>
          </Popup>      
        </footer>

      </article>
    )
  }

  export default BlogDetails