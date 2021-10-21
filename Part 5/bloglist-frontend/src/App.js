import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Login from './components/Login'
import Header from './components/Header'
import {getAll, getLoginToken, postBlog} from './services/blogs'
import { showNotification } from './reducers/notificationReducer'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const dispatch = useDispatch()

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
  
  
  async function handleLoginSubmit(e) {
    e.preventDefault()
    const loginResponse = await getLoginToken(username, password)
    if(loginResponse.error) {
      showNotification(loginResponse.error, 3000)
      dispatch(showNotification(`${loginResponse.error}`))
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
    dispatch(showNotification(`blog saved by ${response.username}`))
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
        <Header username={user.username} logOut={logOut} />
        <CreateBlog
        handleBlogSubmit={handleBlogSubmit}
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