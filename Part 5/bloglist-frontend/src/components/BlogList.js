import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const blogs = useSelector(state => state.blogs)
    
    return (
        <><br /><br />{
            blogs.map(blog => <Link to={`/myblogs/${blog._id}`} 
                key={blog._id}>
                    {blog.title}<br />
                </Link>
            )
        }</>
    )
}

export default BlogList