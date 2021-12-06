import React , {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Map from "./Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const BlogDetails = ({blogs,user}) => {
  
  const params=useParams()

  const [currentBlog,setCurrentBlog]=useState()

    useEffect( () => {
      const selectedBlog = blogs.find((blog)=>blog.objectId===params.blogId)
    
      setCurrentBlog(selectedBlog)
    },[])


    const Content = () => {
      return(
        <article className="single-blog">

          <Link to={currentBlog.photo.url}><img src={currentBlog.photo.url} alt={currentBlog.title}></img></Link>
          <footer>
            <div className="blog-info">
              <h4>{currentBlog.title}</h4>
              
              <h4 className="blog-price"><i className="fas fa-map-marker-alt"></i> {currentBlog.location[0]} , {currentBlog.location[1]}</h4>
            </div>
            <p>{currentBlog.short_info}</p>
            <a target="_blank" href={currentBlog.url}>{currentBlog.url}</a>
            {user && <button className="delete-btn">Edit</button>}

            <Map lat={currentBlog.location[0]} lng={currentBlog.location[1]}/>
            
          </footer>

        </article>
      )
    }

    return(
      <div>
        {currentBlog && <Content/>}
      </div>
    )
}

export default BlogDetails