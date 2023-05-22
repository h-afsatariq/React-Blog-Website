import React, { useState } from 'react';
import Bar from '../../components/Home/Bar';
import Header from '../../components/Home/Header';
import { blogsData } from '../../configure/data';
import BlogsInfo from '../../components/Home/BlogsInfo';
import Empty from '../../components/Mutual/Empty';

const Home = () => {
 const[blogs, setBlogs]= useState(blogsData);
 const [searchKey, setSearchKey] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    handleResults();//calling the function to filter the blogs
  }
  //blogs by category is handled here
  const handleResults = () => {
    const AllBlogs=blogsData;
    const specificBlogs = AllBlogs.filter((blog) => blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()));
    //the filtered blogs will be set as the state if the blog
    setBlogs(specificBlogs);
  }
  const handleClear = () => {
    setSearchKey('');//emptying the charaters entered by the user for filtering
    setBlogs(blogsData); //setting the blog to the initial state
  }
  return (
    <div>
      {/* header */}
      <Header/> 
      {/* search bar */}
      <Bar value={searchKey} formSubmit={handleSearch} searching={(e)=>setSearchKey(e.target.value)} clear={handleClear}/>
      {/* blog list + handling if no blog is filtered*/}
      {!blogs.length ? <Empty/> : <BlogsInfo blogsList={blogs}/>}
      
    </div>
  );
};

export default Home;
