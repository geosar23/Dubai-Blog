import React from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";

const BlogDetails = ({user, blog}) => {
    return(
      <article className="single-blog">

        <Link to={blog.photo.url} element={<img src={blog.photo.url} alt={blog.title}></img>}><img src={blog.photo.url} alt={blog.title}></img></Link>
        <footer>
          <div className="blog-info">
            <h4>{blog.title}</h4>
            
            <h4 className="blog-price"><i className="fas fa-map-marker-alt"></i> {blog.location[0]} , {blog.location[1]}</h4>
          </div>
          <p>{blog.short_info}</p>
          <a target="_blank" href={blog.url}>{blog.url}</a>
          {user && <button className="delete-btn">Edit</button>}

          <Map lat={blog.location[0]} lng={blog.location[1]}/>
          
        </footer>

      </article>
    )
  }

  export default BlogDetails