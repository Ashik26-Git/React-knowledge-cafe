import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                ></Blog>)
            }

        </div>
    );
};
Blogs.propTypes ={
    handleBookmarks: propTypes.func
}
export default Blogs;