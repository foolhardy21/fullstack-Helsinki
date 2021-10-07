import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { showMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const anecdoteContent = e.target.anecdote.value 
        dispatch(addNewAnecdote(anecdoteContent))
        dispatch(showMessage(`${anecdoteContent} is saved.`,3))
      }
      
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm