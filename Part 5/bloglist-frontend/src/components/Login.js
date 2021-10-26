import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import Notification from './Notification'
import { getUser } from '../reducers/loginReducer'

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
        <>
        <h2>log in to application</h2>
        <Notification />
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor='username_input'>username</label>
          <input type='text' name='username_input' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
          <label htmlFor='password_input'>password</label>
          <input type='password' name='password_input' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <input id='loginBtn' type='submit' value='login'/>
        </form>
        </>
    )
}

export default Login