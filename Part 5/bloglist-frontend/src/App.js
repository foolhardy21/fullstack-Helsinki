import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users/Users'
import User from './components/User/User'
import BlogList from './components/BlogList/BlogList'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import { showNotification } from './reducers/notificationReducer'
import { initialiseBlogs } from './reducers/blogsReducer'
import { fetchLocalUser } from './reducers/loginReducer'
import Blog from './components/Blog/Blog'

const App = () => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(fetchLocalUser())
  }, [])
  useEffect(() => {

    if(user.loginSuccess === true) {
      dispatch(initialiseBlogs(user.data.username))
    } else if(user.invalidCred.length > 0) {
      dispatch(showNotification(`${user.invalidCred}`))
    }

  },[user, dispatch])
  
  
  if(user.data) {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path='/myblogs/:blogid'>
              <Blog />
            </Route>
            <Route path='/myblogs'>
              <CreateBlog />
              <BlogList />
            </Route>
            <Route path='/users/:userid'>
              <User />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
  return (
      <>
        <Login />
      </>
   )
  
}

export default App