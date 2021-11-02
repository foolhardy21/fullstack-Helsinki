import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../../reducers/notificationReducer'
import { appendComment, deleteTheBlog, likeTheBlog } from '../../reducers/blogsReducer'

const Blog = () => {
  const {blogid} = useParams()
  const user = useSelector(state => state.login)
  const blogs = useSelector(state => state.blogs)
  const blog = blogs.find(blog => blog._id === blogid)
  const dispatch = useDispatch()
  
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
  function handleCommentSubmit(e) {
    e.preventDefault()

    dispatch(appendComment(e.target.comment_input.value, blogid))
    e.target.comment_input.value=''
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
        <hr/>
        <h3>comments</h3>
        <ul>
          {
            blog.comments.map(comment => {
              return (
                <li key={comment}>{comment}</li>
              )
            })
          }
        </ul>
        <form onSubmit={handleCommentSubmit}>
          <input name='comment_input' type='text' />
          <input type='submit' value='add comment' />
        </form>
    </div>  
  )

}

export default Blog