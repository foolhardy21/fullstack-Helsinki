import React from 'react'
import Blog from './Blog'

const BlogList = (props) => {
    const blogs = props.blogs.sort((a,b) => b.likes-a.likes)
    
    return (
        <>{
            blogs.map(blog => <Blog 
                key={blog._id} 
                blog={blog} 
                getAllBlogs={props.getAllBlogs}
                token={props.token}
                />
            )
        }</>
    )
}

export default BlogList