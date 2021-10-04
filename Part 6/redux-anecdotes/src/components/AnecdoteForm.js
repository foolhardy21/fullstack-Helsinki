import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { saveMessage, hideMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const anecdoteContent = e.target.anecdote.value 
        dispatch(addNewAnecdote(anecdoteContent))
        dispatch(saveMessage(anecdoteContent))
        e.target.anecdote.value = ''
        
        setTimeout(() => {
            dispatch(hideMessage())
        },3000)
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