import React from 'react'

const Filter = ({title,name,handleFunction}) => {
  return (
    <div>{title}<input value={name} onChange={handleFunction} />
    </div>
  )
}

export default Filter
