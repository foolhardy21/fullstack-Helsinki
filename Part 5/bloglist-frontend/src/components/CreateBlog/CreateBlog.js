import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createNewBlog } from '../../reducers/blogsReducer'
import { showNotification } from '../../reducers/notificationReducer'
import Notification from '../Notification'

const CreateBlog = () => {
    const [formVisible, setFormVisible] = useState(false)
    const user = useSelector(state => state.login)
    const dispatch = useDispatch()

    function handleBlogSubmit(e) {
        e.preventDefault()
        const blogObj = {
          title: e.target.title.value,
          author: e.target.author.value,
          url: e.target.url.value,
        }
        dispatch(createNewBlog(user.data.token, blogObj))
        dispatch(showNotification(`blog saved by`))
        
        e.target.title.value = ''
        e.target.author.value = ''
        e.target.url.value = ''
        setFormVisible(false)
    }
    
    return (
        <>
        <br />
        <br />
        <Notification />
        <button 
         style={{display: formVisible ? 'none' : ''}}
         onClick={() => setFormVisible(true)}
        >
            create a new blog
        </button>
        <div style={{display: formVisible ? '' : 'none'}}>
            <form
            onSubmit={handleBlogSubmit}
            >
            <label htmlFor='title'>title</label>
            <input name='title' type='text'/><br/>
            <label htmlFor='author'>author</label>
            <input name='author' type='text'/><br/>
            <label htmlFor='url'>url</label>
            <input name='url' type='text'/><br/>
            <input type='submit' value='create' />
            </form>
            <button onClick={() => setFormVisible(false)}>cancel</button>
        </div>
        </>
    )
}
export default CreateBlog