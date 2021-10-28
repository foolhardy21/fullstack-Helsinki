import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const blogs = useSelector(state => state.blogs)
    
    return (
        <div>
            <h2>blogs</h2>
            {
                blogs.map(blog => <Link to={`/myblogs/${blog._id}`} 
                    key={blog._id}>
                        {blog.title}<br />
                    </Link>
                )
            }
        </div>
    )
}

export default BlogList