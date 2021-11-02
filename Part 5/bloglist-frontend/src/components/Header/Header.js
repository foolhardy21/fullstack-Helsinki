import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import { logOutUser } from '../../reducers/loginReducer'

const Header = () => {
    const user = useSelector(state => state.login)
    const dispatch = useDispatch()

    function logOut() {
        dispatch(logOutUser())
    }
      
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navlist}>
                <li className={styles.navlist_item}>
                    <Link className={styles.navlist_link} to='/myblogs'>my blogs</Link>
                </li>
                <li className={styles.navlist_item}>
                    <Link className={styles.navlist_link} to='/users'>users</Link>
                </li>
                <li className={styles.navlist_item}>
                    {user.data.username} logged in
                </li>
                <li className={styles.navlist_item}>
                    <Link to='/'>
                        <button onClick={logOut}>
                            logout
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header