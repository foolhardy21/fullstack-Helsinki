import React from 'react'

const ClickableNation = ({nationstoshow,showCountry}) => {
  return (
    <div>
    {nationstoshow.map((nation,i) =>
      <div key={nation.numericCode}>
      {nation.name}
      <button type="button" value={nation.name} onClick={showCountry}>show</button>
      </div>
    )}
    </div>
  )
}

export default ClickableNation
