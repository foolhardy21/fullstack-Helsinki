import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const message = useSelector(state => state.notification)

  if(message) {
      return (
        <div style={style}>
        {message}
      </div>
      )
  } 
  return (
    <></>
  ) 
  

  
}

export default Notification