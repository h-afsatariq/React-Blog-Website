import React from 'react';
import './style.css';
import Chip from '../../../Mutual/Chip';
import {Link} from 'react-router-dom';

const SingleBlog = ({
  blog:{id,title,category,subCategory,description,Name,Avatar,createdAt,background_img},}) => {return(
    <div className='SingleBlog'>
      <img src={background_img} alt="background" className='back' />
      <Chip catg={category}/>
        <h3>{title}</h3>
        <p className='description'>{description}</p>

        <footer>
            <div className='authorInfo'>
            <img src={Avatar} alt="Avatar" />
            <div>
                <h6>{Name}</h6>
                <p>{createdAt}</p>
            </div>
            </div>
            <Link className='link' to={`/blog/${id}`}>Read More</Link>
        </footer>
    </div>
  );
  };

export default SingleBlog;
