import React from 'react';
import SingleBlog from './SingleBlog';
import './style.css';

const BlogsInfo = ({blogsList}) => {
    return (
  
    <div className='BolgsInfo'>
        {blogsList.map((blog)=>(
        <SingleBlog blog={blog} key={blog.id}/>
        ))}
      
    </div> 
  
);};

export default BlogsInfo;
