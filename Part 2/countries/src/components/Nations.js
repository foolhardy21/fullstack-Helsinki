import React from 'react'
import Nation from './Nation.js'
import ClickableNation from './ClickableNation.js'
import AllNations from './AllNations.js'

const Nations = ({searchName,nationstoshow,showCountry}) => {

  if (nationstoshow.length === 1) {
    return ( <Nation nation={nationstoshow[0]} /> )
  }
  else if(nationstoshow.length<=10){
    return ( <ClickableNation nationstoshow={nationstoshow} showCountry={showCountry} /> )
  }
  else if (searchName === '') {
    return ( <AllNations nationstoshow={nationstoshow} /> )
  }
  else {
    return ( <div>Too many matches, specify another filter</div>  )
  }
}

export default Nations
