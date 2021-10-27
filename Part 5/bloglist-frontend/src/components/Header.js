import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import Notification from './Notification'
import { logOutUser } from '../reducers/loginReducer'

const Header = () => {
    const user = useSelector(state => state.login)
    const dispatch = useDispatch()

    function logOut() {
        dispatch(logOutUser())
    }
      
    return (
        <>
            <h2>blogs</h2>
            <p>{user.data.username} logged in</p>
            <Link to='/'>
                <button onClick={logOut}>
                    logout
                </button>
            </Link>
            <Notification />
        </>
    )
}

export default Header