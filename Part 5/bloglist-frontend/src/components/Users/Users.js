import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../../reducers/usersReducer'
import styles from './Users.module.css'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },[])

    return (
        <>
            <h3>Users</h3>
            <table className={styles.users_table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Blogs created</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map(user => {
                        return (
                            <tr key={user._id}>
                                <td>
                                    <Link to={`/users/${user._id}`}>
                                        {user.name}
                                    </Link>
                                </td>
                                <td>
                                    {user.blogs.length}
                                </td>
                            </tr>
                        ) 
                    })
                }
                </tbody>
            </table>        
        </>
    )
}

export default Users