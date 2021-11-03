import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './BlogList.module.css'

const BlogList = () => {
    const blogs = useSelector(state => state.blogs)
    
    return (
        <>
        <h2>blogs</h2>
            <ul className={styles.bloglist}>
                {
                    blogs.map(blog => <Link to={`/myblogs/${blog._id}`} 
                        key={blog._id}>
                            <li>{blog.title}</li>
                        </Link>
                    )
                }
            </ul>
        </>
    )
}

export default BlogList