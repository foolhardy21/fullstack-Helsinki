import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import {initialiseAnecdotes} from './reducers/anecdoteReducer'
import { getAll } from './anecdoteService'

const App = () => {
  
  const dispatch = useDispatch()

  useEffect(() => {
    getAll().then(data => {
      dispatch(initialiseAnecdotes(data))
    })
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