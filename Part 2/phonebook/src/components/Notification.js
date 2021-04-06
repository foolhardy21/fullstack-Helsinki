import React from 'react'

const Notification = ({message}) => {
  if(message === null)
  return null;
  return (
    <div className='confirmm'>{message}</div>
  )
}

export default Notification
