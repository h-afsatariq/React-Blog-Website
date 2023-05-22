import React, { useEffect , useState }  from 'react';
import './style.css';
import { blogsData } from '../../configure/data';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Chip from '../../components/Mutual/Chip';
import Empty from '../../components/Mutual/Empty';


const Blog = () => {
  const {id} = useParams();//id being recived from the url
  const [blog, setBlog] = useState(null);//creating the state for the current blog whose default state will be null
useEffect(() => {
  let blog = blogsData.find((blog) => blog.id === parseInt(id));//finding the blog whose id is equal to the id being recived from the url
if(blog){//if a certain blog exsists then set the state of the blog
 setBlog(blog);//setting the blog to the state
}

},[]);

  return (
    <div>
      <Link to='/' className='back'>Home Page</Link>
      
      {
        blog ? ( <div className='blog'>
        <header>
          <p className='date'>Published {blog.createdAt}</p>
          <h1>{blog.title}</h1>
          <div className='SubCat'>
            {blog.subCategory.map((cat,index) => <div> <Chip key={index} catg={cat}/></div>)}
          </div>
        </header>
        <img src={blog.background_img} alt="background image" />
        <p className='desc'>{blog.description}</p>
        </div>):(<Empty/>)
      }
    </div>
  );
};

export default Blog;
