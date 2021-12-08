import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagePop from './ImagePop';

const BlogCard = ({objectId,photo_thumb,title,short_info,photo}) => {

  const [imgPop,setImgPop]=useState(false)

  const openImg = (
    <div className="imgpop-container">
      <a onClick={()=>setImgPop(true)}><img src={photo_thumb.url} alt={title} className='photo' /></a>
    </div>
  )

  return (
    <article key={objectId} className='menu-item'>
      {openImg}
      <div className='item-info'>
        <header>
          <h4><Link to={"/blog/"+objectId}> {title}</Link></h4>
        </header>
        <p className='item-text'>{short_info}</p>
      </div>
      <ImagePop imgPop={imgPop} setImgPop={setImgPop} photo={photo}/>
    </article>
  )
};

export default BlogCard;
