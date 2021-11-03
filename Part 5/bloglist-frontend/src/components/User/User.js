import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styles from './User.module.css'

const User = () => {
    const {userid} = useParams()
    const user = useSelector(state => state.users.find(user => user._id === userid))

    if(!user) {
        return null
    }
    return (
        <>
            <h2>{user.name}</h2>
            <h3>added blogs</h3>
            <ul className={styles.userblogs}>
            {
                user.blogs.map(blog => {
                    return (
                        <li key={blog._id}>{blog.title}</li>
                        )
                })
            }
            </ul>
        </>
    )
}

export default User