import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const messages = useSelector(state => state.notification)

  if(messages.length > 0) {
      return (
        <div style={style}>
        {messages[0].text}
      </div>
      )
  } 
  return (
    <></>
  ) 
  

  
}

export default Notification