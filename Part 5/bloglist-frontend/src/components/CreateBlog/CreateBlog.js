import React, {useState} from 'react'
import { useSelector } from 'react-redux'

const CreateBlog = (props) => {
    const [formVisible, setFormVisible] = useState(false)
    const notifications = useSelector(state => state)
    console.log('notifications in form component',notifications)
    return (
        <>
        <h2>blogs</h2>
        <p>{props.user.username} logged in</p>
        <button 
         onClick={props.logOut}
         >
             logout
        </button>
        {
            notifications > 0 && 
            <p style={{color: 'green'}}>{notifications[0].text}</p>
        }
        <button 
         style={{display: formVisible ? 'none' : ''}}
         onClick={() => setFormVisible(true)}
        >
            create a new blog
        </button>
        <div style={{display: formVisible ? '' : 'none'}}>
            <form
            onSubmit={props.handleBlogSubmit}
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