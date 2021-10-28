import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../../reducers/notificationReducer'
import { deleteTheBlog, likeTheBlog } from '../../reducers/blogsReducer'

const Blog = () => {
  const {blogid} = useParams()
  const user = useSelector(state => state.login)
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  const blog = blogs.find(blog => blog._id === blogid)
  
  function handleLike() {
    const blogObj = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes+1,
      username: user.data.username
    }
    dispatch(likeTheBlog(blog._id, blogObj))
  }
  function handleDelete() {
    dispatch(deleteTheBlog(blog._id, user.data.token))
    dispatch(showNotification(`blog deleted`))
  }

  if(!blog) {
    return null
  }
  return (
    <div>
        <br/>
        <h2>{blog.title}</h2>
        {blog.url}<br/>
        {blog.likes}
        <button onClick={handleLike}>like</button><br/>
        by {blog.author}
        <button onClick={handleDelete}>delete blog</button>
        
    </div>  
  )

}

export default Blog