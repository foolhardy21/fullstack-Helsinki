import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { saveMessage, hideMessage } from '../reducers/notificationReducer'
import { newAnecdote } from '../anecdoteService'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const anecdoteContent = e.target.anecdote.value 
        const responseAnecdote = await newAnecdote(anecdoteContent)
        dispatch(addNewAnecdote(responseAnecdote))
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