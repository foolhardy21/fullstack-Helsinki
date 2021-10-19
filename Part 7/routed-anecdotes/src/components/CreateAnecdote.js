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
    const resetAllValues = () => {
      content.resetValue()
      author.resetValue()
      info.resetValue()
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input name={content.name} value={content.value} onChange={content.onChange} />
          </div>
          <div>
            author
            <input name={author.name} value={author.value} onChange={author.onChange} />
          </div>
          <div>
            url for more info
            <input name={info.name} value={info.value} onChange={info.onChange} />
          </div>
          <button type='submit'>create</button>
          <button type='reset' onClick={resetAllValues}>reset</button>
        </form>
      </div>
    )
  
}

export default CreateNew