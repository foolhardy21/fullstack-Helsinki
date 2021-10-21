import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Login from './components/Login'
import Header from './components/Header'
import { getLoginToken } from './services/blogs'
import { showNotification } from './reducers/notificationReducer'
import { initialiseBlogs, createNewBlog } from './reducers/blogsReducer'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')
  const dispatch = useDispatch()

  function logOut() {
    window.localStorage.removeItem('user')
    setUser('')
  }
  
  
  async function handleLoginSubmit(e) {
    e.preventDefault()
    const loginResponse = await getLoginToken(username, password)
    if(loginResponse.error) {
      dispatch(showNotification(`${loginResponse.error}`))
    } else if(loginResponse.token) {
      window.localStorage.setItem('user', JSON.stringify(loginResponse))
      setUser(loginResponse)
    }
    setUsername('')
    setPassword('')
  }

  function handleBlogSubmit(e) {
    e.preventDefault()
    const blogObj = {
      title: e.target.title.value,
      author: e.target.author.value,
      url: e.target.url.value,
    }
    dispatch(createNewBlog(user.token, blogObj))
    dispatch(showNotification(`blog saved by`)) 
  }
  
  useEffect(() => {
    const savedUser = window.localStorage.getItem('user')
    if(savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }, [])
  useEffect(() => {
    dispatch(initialiseBlogs(user.username))
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