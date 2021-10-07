import { getAll, newAnecdote, voteAnecdote } from '../service/anecdoteService'

const asObject = (anecdote) => {
  return {
    content: anecdote.text,
    votes: anecdote.votes,
    id: anecdote.id
  }
}

export const voteForAnecdote = (anecdote) => {
  return async dispatch => {
    const response = await voteAnecdote(anecdote)
    dispatch({
      type: 'VOTE',
      data: response
    })
  } 
}

export const addNewAnecdote = (content) => {
  return async dispatch => {
    const response = await newAnecdote(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: response
    })
  }
}

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  
  switch(action.type) {
    
    case 'INIT':  let anecdotes = action.data
    anecdotes = anecdotes.map(asObject) 
    return anecdotes 

    case 'VOTE': const newState = state.map(anecdote => {
      if(anecdote.id === action.data.id) {
        return { ...anecdote, votes: action.data.votes }
      } else return anecdote
    }) 
    return newState

    case 'NEW_ANECDOTE': const newAnecdoteObj = asObject(action.data)

    return [...state, newAnecdoteObj]

    default: return state
  }
}

export default anecdoteReducer