import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleAddToBookmarkes, handleMarkeRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{Blogs.length}</h1>
            {
                blogs.map(blog =><Blog
                     key={blog.id}
                     blog={blog}
                     handleAddToBookmarkes={handleAddToBookmarkes}
                     handleMarkeRead={handleMarkeRead}
                     ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmarkes: PropTypes.func
}

export default Blogs;