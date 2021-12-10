import React ,{ useState }from "react";
import Map from "../components/Map";
import * as blogService from '../services/blog'
import Popup from "./Popup";

const BlogDetails = ({user, blog ,setBlogs, loading, setLoading}) => {
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
          <div className="single-blog-details">
            <img src={blog.photo.url} alt={blog.title}></img>
            <div className="blog-info">
              <div className="blog-headers">
                <h4>{blog.title}</h4>
                {user && editBlog}
              </div>
              <p>{blog.description}</p>
              <div className="blog-footer">
                <button><a target="_blank" rel="noreferrer" href={blog.url}>Find Out More</a></button>
                <h4><i className="fas fa-map-marker-alt"></i> {blog.location[1]} , {blog.location[0]}</h4>
                <Map lat={blog.location[0]} lng={blog.location[1]}/>
              </div>
            </div>
          </div>
          <Popup popUp={popUp} setPopUp={setPopUp} updateBlog={updateBlog} editedBlog={editedBlog} setEditedBlog={setEditedBlog}>
            <h3>My PopUp</h3>
          </Popup>      
      </article>
    )
  }

  export default BlogDetails