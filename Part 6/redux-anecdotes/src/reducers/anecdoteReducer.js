
const asObject = (anecdote) => {
  return {
    content: anecdote.text,
    votes: 0,
    id: anecdote.id
  }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: id
  }
}

export const addNewAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: content
  }
}

export const initialiseAnecdotes = (anecdotes) => {
  return {
    type: 'INIT',
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action) => {
  
  switch(action.type) {
    
    case 'INIT':  let anecdotes = action.data
    anecdotes = anecdotes.map(asObject) 
    return anecdotes 

    case 'VOTE': const newState = state.map(anecdote => {
      if(anecdote.id === action.data) {
        return { ...anecdote, votes: anecdote.votes + 1 }
      } else return anecdote
    }) 
    return newState

    case 'NEW_ANECDOTE': const newAnecdoteObj = asObject(action.data)

    return [...state, newAnecdoteObj]

    default: return state
  }
}

export default anecdoteReducer