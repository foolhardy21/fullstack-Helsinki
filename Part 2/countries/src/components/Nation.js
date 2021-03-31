import React from 'react'
import Weather from './Weather.js'

const Nation = ({nation}) => {
  return (
    <div>
      <h1>{nation.name}</h1>
      <div>capital {nation.capital}</div>
      <div>population {nation.population}</div>
      <div>
      <h3>Spoken languages</h3>
      <ul>
      {nation.languages.map(
        language => <li key={language.name}>{language.name}</li>
      )}
      </ul>
      <div><img alt="Country Flag" src={nation.flag} height="100" width="100" /></div>
      </div>
      <h3>Weather in {nation.capital}</h3>
      <Weather city={nation.capital} />
    </div>
  )
}

export default Nation
