import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid} = useParams()
    const user = useSelector(state => state.users.find(user => user._id === userid))

    if(!user) {
        return null
    }
    return (
        <div>
            <h2>{user.name}</h2>
            <h4>added blogs</h4>
            {user.blogs.map(blog => {
                return (
                    <li key={blog._id}>{blog.title}</li>
                )
            })}
        </div>
    )
}

export default User