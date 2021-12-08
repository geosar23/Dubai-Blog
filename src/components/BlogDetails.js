import React ,{ useState }from "react";
import Map from "../components/Map";
import * as blogService from '../services/blog'
import Popup from "./Popup";

const BlogDetails = ({user, blog ,setBlogs}) => {
  const [popUp,setPopUp]=useState(false)
  const [editedBlog,setEditedBlog]=useState({
    objectId:blog.objectId,
    title:blog.title,
    short_info:blog.short_info,
    description:blog.description
  })

  async function updateBlog(e){
    e.preventDefault()
    try {
      await blogService.updateBlog(editedBlog,user)
      const response=await blogService.getBlogs()
      setBlogs(response)
      setPopUp(false)
    } catch (error) {
      console.error(error)
    }
  }


  const editBlog = (
    <div className="edit-btn-container">
      <button className="edit-btn" onClick={()=>setPopUp(true)}>Edit</button>
    </div>
  )

    return(
      <article className="single-blog">

        <img src={blog.photo.url} alt={blog.title}></img>
        <footer>
          <div className="blog-info">
            <h4>{blog.title}</h4>
            
            <h4 className="blog-price"><i className="fas fa-map-marker-alt"></i> {blog.location[0]} , {blog.location[1]}</h4>
          </div>
          <p>{blog.description}</p>
          <a target="_blank" rel="noreferrer" href={blog.url}>{blog.url}</a>
          <Map lat={blog.location[0]} lng={blog.location[1]}/>
          {user && editBlog}
          <Popup popUp={popUp} setPopUp={setPopUp} updateBlog={updateBlog} editedBlog={editedBlog} setEditedBlog={setEditedBlog}>
            <h3>My PopUp</h3>
          </Popup>      
        </footer>

      </article>
    )
  }

  export default BlogDetails