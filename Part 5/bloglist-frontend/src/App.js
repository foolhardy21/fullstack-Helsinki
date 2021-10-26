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
    dispatch(createNewBlog(user.data.token, blogObj))
    dispatch(showNotification(`blog saved by`)) 
  }
  
  useEffect(() => {
    dispatch(fetchLocalUser())
  }, [])
  useEffect(() => {

    if(user.loginSuccess === true) {
      dispatch(initialiseBlogs(user.data.username))
    } else if(user.invalidCred.length > 0) {
      dispatch(showNotification(`${user.invalidCred}`))
    } else if(user.logOutClicked) {
      console.log('loggedOut')
    }

  },[user])
  
  
  if(user.data) {
    return (
      <div>
        <Header username={user.data.username} logOut={logOut} />
        <CreateBlog
        handleBlogSubmit={handleBlogSubmit}
        />
        <BlogList
        token={user.data.token} 
        user={user.data}
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