import React, { useState, useEffect } from 'react'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog'
import Login from './components/Login'
import {getAll, getLoginToken, postBlog} from './services/blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')

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
    setMessage(text)
      setTimeout(() => {
        setMessage('')
      },duration)
  }
  
  async function handleLoginSubmit(e) {
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

  async function handleBlogSubmit(e) {
    e.preventDefault()
    const blogObj = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    }
    const response = await postBlog(user.token, blogObj)
    showNotification(`blog saved by ${response.username}`, 3000)
    getAllBlogs()
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
        <CreateBlog
        user={user}
        message={message}
        handleBlogSubmit={handleBlogSubmit}
        logOut={logOut}
        />
        <BlogList
        token={user.token} 
        blogs={blogs}
        getAllBlogs={getAllBlogs} 
        />
      </div>
    )
  }
  return (
      <div>
        <Login
        message={message}
        handleLoginSubmit={handleLoginSubmit}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword} 
        />
      </div>
   )
  
}

export default App