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
  const [errorPut,setErrorPut]=useState()

  async function updateBlog(e){
    e.preventDefault()
    setErrorPut()
    try {
      await blogService.updateBlog(editedBlog,user)
      const response=await blogService.getBlogs()
      setBlogs(response)
      setPopUp(false)
    } catch (error) {
      setErrorPut(error)
    }
  }


  const editBlog = (
    <div className="edit-btn-container">
      <button className="edit-btn" onClick={()=>setPopUp(true)}>Edit</button>
    </div>
  )

  const footer = (
    <div className="blog-footer">
      <a target="_blank" rel="noreferrer" href={blog.url}><button>Find Out More</button></a>
      <h4><i className="fas fa-map-marker-alt"></i> {blog.location[1]} , {blog.location[0]}</h4>
      <Map lat={blog.location[0]} lng={blog.location[1]}/>
    </div>
  )

    return(
      <div>
        <article className="single-blog">
              <div className="blog-headers">
                <h4>{blog.title}</h4>
                {user && editBlog}
              </div>
              <p>
                <img src={blog.photo.url} alt={blog.title}></img>
                {blog.description}
              </p> 
          <Popup popUp={popUp} setPopUp={setPopUp} updateBlog={updateBlog} editedBlog={editedBlog} setEditedBlog={setEditedBlog} errorPut={errorPut} setErrorPut={setErrorPut}>
            <h3>My PopUp</h3>
          </Popup>      
      </article>
      {footer}
      </div>
    )
  }

  export default BlogDetails

