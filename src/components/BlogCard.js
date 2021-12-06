import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({objectId,photo_thumb,title,user,short_info}) => {
  return (
    <article key={objectId} className='menu-item'>
      <Link to={"/blog/"+objectId}><img src={photo_thumb.url} alt={title} className='photo' /></Link>
      <div className='item-info'>
        <header>
          <h4><Link to={"/blog/"+objectId}> {title}</Link></h4>
        </header>
        <p className='item-text'>{short_info}</p>
        {user && <button className="delete-btn">Edit</button>} 
      </div>
    </article>
  )
};

export default BlogCard;
