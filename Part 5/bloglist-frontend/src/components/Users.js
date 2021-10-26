import React, {useEffect, useState} from 'react'
import User from './User'
import { getAllUsers } from "../services/blogs"

const Users = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        async function fetchUsers() {
            const fetchedUsers = await getAllUsers()
            setUsers(fetchedUsers)
        }
        fetchUsers()
    },[])

    return (
        <div>
            <h3>Users</h3>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Blogs created</th>
                </tr>
                {
                    users.map(user => {
                        return <User key={user.id}
                        name={user.name}
                        blogsLength={user.blogs.length} 
                        />
                    })
                }
            </table>        
        </div>
    )
}

export default Users