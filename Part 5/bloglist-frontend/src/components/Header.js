import { useDispatch, useSelector } from 'react-redux'
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
            <button 
            onClick={logOut}
            >
                logout
            </button>
            <Notification />
        </>
    )
}

export default Header