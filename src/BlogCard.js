import React, { useState } from 'react';

const BlogCard = ({id,photo_thumb,info,price,title,user}) => {
  return (
    <article className="single-blog">

      <img src={photo_thumb.url} alt={title}></img>
      <footer>
        <div className="blog-info">
          <h4>{title}</h4>
          <h4 className="blog-price">{price}</h4>
        </div>
        <p>{info}</p>
        {user && <button className="delete-btn">Edit</button>} 
      </footer>

    </article>
  )
};

export default BlogCard;
