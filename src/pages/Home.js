import React from 'react';
import BlogCard from '../components/BlogCard';

const Home = ({blogs}) => {
  return (
    <section className='main'>

      <div className="title">
        <h2>Top Dubai Landmarks</h2>
        <div className="underline"></div>
      </div>

      <div>
        {blogs.map((blog)=>{
          return <BlogCard key={blog.objectId} {...blog}/>
        })}
      </div>

    </section>
  )
};

export default Home;
