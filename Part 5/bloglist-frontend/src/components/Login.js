import React from 'react'
import Notification from './Notification'

const Login = (props) => {
    return (
        <>
        <h2>log in to application</h2>
        <Notification />
        <form onSubmit={props.handleLoginSubmit}>
          <label htmlFor='username_input'>username</label>
          <input type='text' name='username_input' value={props.username} onChange={(e) => props.setUsername(e.target.value)}/><br/>
          <label htmlFor='password_input'>password</label>
          <input type='password' name='password_input' value={props.password} onChange={(e) => props.setPassword(e.target.value)}/><br/>
          <input id='loginBtn' type='submit' value='login'/>
        </form>
        </>
    )
}

export default Login