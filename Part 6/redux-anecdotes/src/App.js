import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {initialiseAnecdotes} from './reducers/anecdoteReducer'


const App = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initialiseAnecdotes())
  },[dispatch])

  return (
    <div>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App