import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/index'

const CreateNew = (props) => {
    const content = useField('content')
    const author = useField('author')
    const info = useField('info')
    const history = useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      })
      history.push('/')
      props.setNotification('New anecdote created')
      setTimeout(() => {
        props.setNotification('')
      },5000)
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} />
          </div>
          <div>
            author
            <input {...author} />
          </div>
          <div>
            url for more info
            <input {...info} />
          </div>
          <button>create</button>
        </form>
      </div>
    )
  
}

export default CreateNew