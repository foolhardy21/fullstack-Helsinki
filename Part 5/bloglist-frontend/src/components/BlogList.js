import React from 'react'
import { useSelector } from 'react-redux'
import Blog from './Blog/Blog'

const BlogList = (props) => {
    const blogs = useSelector(state => state.blogs.sort((a,b) => b.likes-a.likes))

    return (
        <>{
            blogs.map(blog => <Blog 
                key={blog._id} 
                blog={blog}
                user={props.user} 
                token={props.token}
                />
            )
        }</>
    )
}

export default BlogList