import React from 'react'

const AllNations = ({nationstoshow}) => {
  return (
    <div>
      {nationstoshow.map((nation,i) =>
        <div key={nation.numericCode}>{nation.name}</div>)}
    </div>
  )
}

export default AllNations
