import React, {useState} from 'react'
import {likeBlog, deleteBlog} from '../../services/blogs'

const Blog = ({blog, getAllBlogs, token}) => {
  const [blogVisible, setBlogVisible] = useState(false)

  async function handleLike() {
    const blogObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes+1,
      username: blog.user.username
    }
    // await likeBlog(blog._id, blogObj)
    // console.log(blog, token)
    getAllBlogs()
  }
  async function handleDelete() {
    await deleteBlog(blog._id, token)
    getAllBlogs()
  }

  return (
    <div>
        <br/><hr/>
        {blog.title}<br/>{blog.author}
        <button onClick={() => setBlogVisible(!blogVisible)}>
          {blogVisible ? 'hide' : 'more'}
        </button>
        <div id='infodiv' style={{display: blogVisible ? '' : 'none'}}>
          {blog.url}<br/>
          {blog.likes}
          <button onClick={handleLike}>like</button><br/>
          <button onClick={handleDelete}>delete blog</button>
        </div>
    </div>  
  )

}

export default Blog