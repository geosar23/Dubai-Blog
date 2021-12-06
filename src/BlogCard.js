import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({objectId,photo_thumb,title,user,short_info}) => {
  return (
    <article key={objectId} className='menu-item'>
      <img src={photo_thumb.url} alt={title} className='photo' />
      <div className='item-info'>
        <header>
          <Link to={"/blog/"+objectId}><h4> {title}</h4></Link>
        </header>
        <p className='item-text'>{short_info}</p>
        {user && <button className="delete-btn">Edit</button>} 
      </div>
    </article>
  )
};

export default BlogCard;
