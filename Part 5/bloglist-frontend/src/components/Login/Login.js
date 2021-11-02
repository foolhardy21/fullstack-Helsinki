import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import Notification from '../Notification'
import { getUser } from '../../reducers/loginReducer'
import styles from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function handleLoginSubmit(e) {
    e.preventDefault()
    dispatch(getUser(username, password))
    setUsername('')
    setPassword('')
  }
  
    return (
        <section className={styles.login_section}>
        <h2>log in to application</h2>
        <output>
          <Notification />
        </output>
        <form className={styles.login_form} onSubmit={handleLoginSubmit}>
          <label htmlFor='username_input'>username</label>
          <input type='text' name='username_input' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <label htmlFor='password_input'>password</label>
          <input type='password' name='password_input' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <input id='loginBtn' type='submit' value='login'/>
        </form>
        </section>
    )
}

export default Login