import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showNotification } from '../../reducers/notificationReducer'
import { deleteTheBlog, likeTheBlog } from '../../reducers/blogsReducer'

const Blog = ({blog}) => {
  const [blogVisible, setBlogVisible] = useState(false)
  const user = useSelector(state => state.login)
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