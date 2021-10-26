import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Users from './components/Users'
import BlogList from './components/BlogList'
import CreateBlog from './components/CreateBlog/CreateBlog'
import Login from './components/Login'
import Header from './components/Header'
import { showNotification } from './reducers/notificationReducer'
import { initialiseBlogs } from './reducers/blogsReducer'
import { fetchLocalUser } from './reducers/loginReducer'

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

  },[user])
  
  
  if(user.data) {
    return (
      <div>
        <Header />
        
        <Router>
          <Link to='/myblogs'>my blogs</Link>
          <Link to='/users'>users</Link>
          <Switch>
            <Route path='/myblogs'>
              <CreateBlog />
              <BlogList />
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
      <div>
        <Login />
      </div>
   )
  
}

export default App