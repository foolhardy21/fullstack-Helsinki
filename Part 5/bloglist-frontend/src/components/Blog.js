import React, {useState} from 'react'
import {likeBlog} from '../services/blogs'

const Blog = ({blog, getAllBlogs}) => {
  const [blogVisible, setBlogVisible] = useState(false)

  async function updateLikes() {
    const blogObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes+1,
      username: blog.user.username
    }
    await likeBlog(blog._id, blogObj)
    getAllBlogs()
  }
  return (
    <div>
        {blog.title} {blog.author}
        <button onClick={() => setBlogVisible(!blogVisible)}>
          {blogVisible ? 'hide' : 'show'}
        </button>
        <div style={{display: blogVisible ? '' : 'none'}}>
          <p>{blog.url}</p>
          {blog.likes}
          <button onClick={updateLikes}>like</button>
        </div>
    </div>  
  )

}

export default Blog