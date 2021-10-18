import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Menu from './components/Menu'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import CreateNew from './components/CreateAnecdote'
import Anecdote from './components/Anecdote'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  
  return (
    <div>
      <h1>Software anecdotes</h1>
      <Router>
        <Menu notification={notification} />
        <Switch>

          <Route path='/create'>
            <CreateNew addNew={addNew} setNotification={setNotification}/>
          </Route>
          
          <Route path='/about'>
            <About />
          </Route>

          <Route path='/:id'>
            <Anecdote anecdotes={anecdotes} />
          </Route>
          
          <Route path='/'>
            <AnecdoteList anecdotes={anecdotes} />
          </Route>
        
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App;