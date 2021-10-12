import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {
    return (
        <>{
            props.blogs.map(blog => <Blog key={blog._id} blog={blog} getAllBlogs={props.getAllBlogs}/>)
        }</>
    )
}

export default BlogList