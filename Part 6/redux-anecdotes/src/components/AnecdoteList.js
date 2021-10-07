import React from 'react'
import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes
                                                .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
                                                .sort((a,b) => b.votes - a.votes))
    const dispatch = useDispatch()

    const vote = (id) => {
        const anecdote = anecdotes.find(anecdote => anecdote.id === id)
        dispatch(voteForAnecdote(anecdote))
        dispatch(showMessage(`You voted for ${anecdote.content}`,3))
    }
    
    return (
        <>
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList