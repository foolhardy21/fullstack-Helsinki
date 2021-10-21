import Notification from './Notification'

const Header = (props) => {
    return (
        <>
            <h2>blogs</h2>
            <p>{props.username} logged in</p>
            <button 
            onClick={props.logOut}
            >
                logout
            </button>
            <Notification />
        </>
    )
}

export default Header