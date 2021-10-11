import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import {getAll, getLoginToken} from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function getAllBlogs() {
    let blogsResponse = await getAll()
    blogsResponse = blogsResponse.filter(blog => blog.user.username === user.username)
    setBlogs(blogsResponse)
  }

  function logOut() {
    window.localStorage.removeItem('user')
    setUser('')
    setBlogs('')
  }
  
  function showNotification(text, duration) {
    setErrorMessage(text)
      setTimeout(() => {
        setErrorMessage('')
      },duration)
  }
  
  async function handleSubmit(e) {
    e.preventDefault()
    const loginResponse = await getLoginToken(username, password)
    if(loginResponse.error) {
      showNotification(loginResponse.error, 3000)
    } else if(loginResponse.token) {
      window.localStorage.setItem('user', JSON.stringify(loginResponse))
      setUser(loginResponse)
    }
    setUsername('')
    setPassword('')
  }
  
  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    if(savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])
  useEffect(() => {
    getAllBlogs()
  },[user])
  
  
  if(user) {
    return (
      <div>
        <h2>blogs</h2>
        <p>{user.username} logged in</p>
        <button onClick={logOut}>logout</button>
        {
          blogs.map(blog => <Blog key={blog._id} blog={blog} />)
        }
      </div>
    )
  } else if(!user) {
    return (
      <div>
        <h2>log in to application</h2>
        <p>{errorMessage}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username_input'>username</label>
          <input type='text' name='username_input' value={username} onChange={(e) => setUsername(e.target.value)}/><br/>
          <label htmlFor='password_input'>password</label>
          <input type='password' name='password_input' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
          <input type='submit' value='login'/>
        </form>
      </div>
    )
  }
}

export default App