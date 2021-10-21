import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {likeBlog, deleteBlog} from '../../services/blogs'
import { showNotification } from '../../reducers/notificationReducer'

const Blog = ({blog, getAllBlogs, token}) => {
  const [blogVisible, setBlogVisible] = useState(false)
  const dispatch = useDispatch()
  
  async function handleLike() {
    const blogObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes+1,
      username: blog.user.username
    }
    await likeBlog(blog._id, blogObj)
  }
  async function handleDelete() {
    await deleteBlog(blog._id, token)
    dispatch(showNotification(`blog deleted`))
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