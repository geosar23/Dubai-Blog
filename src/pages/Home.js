import React from 'react';
import BlogCard from '../components/BlogCard';

const Home = ({blogs}) => {
  return (
    <section>

      <div className="title">
        <h2>Dubai's SightSeer Blog</h2>
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
