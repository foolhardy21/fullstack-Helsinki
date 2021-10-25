import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Login from './components/Login'
import Header from './components/Header'
import { showNotification } from './reducers/notificationReducer'
import { initialiseBlogs, createNewBlog } from './reducers/blogsReducer'
import { fetchLocalUser, getUser, logOutUser } from './reducers/loginReducer'
import { useSelector } from 'react-redux'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()

  function logOut() {
    dispatch(logOutUser())
  }
  
  
  function handleLoginSubmit(e) {
    e.preventDefault()

    dispatch(getUser(username, password))
    // if(user && !user.token) {
    //   dispatch(showNotification(`${user}`))
    // }
    //update notification of invalid credentials only in case of login fail
    //initialise blogs only in case of login success and no login
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
    dispatch(fetchLocalUser())
  }, [])
  useEffect(() => {
    if(user) {
      console.log('fetching blogs')
      dispatch(initialiseBlogs(user.username))
    }
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
        user={user}
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