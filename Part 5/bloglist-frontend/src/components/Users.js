import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUsers } from '../reducers/usersReducer'

const Users = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    },[])

    return (
        <div>
            <h3>Users</h3>
            <table>
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
        </div>
    )
}

export default Users