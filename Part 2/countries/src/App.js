import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Nation = ({nation}) => {
  return (
    <div>
      <h1>{nation.name}</h1>
      <div>
      capital {nation.capital}
      </div>
      <div>
      population {nation.population}
      </div>
      <div>
      <h3>languages</h3>
      <ul>
      {nation.languages.map(
        language => <li key={language.name}>{language.name}</li>
      )}
      </ul>
      <div>
      <img alt="Country Flag" src={nation.flag} height="100" width="100" />
      </div>
      </div>
    </div>
  )
}
const Nations = ({searchName,nationstoshow,showCountry}) => {

  if (nationstoshow.length === 1) {
    return (
      <Nation nation={nationstoshow[0]} />
    )
  }
  else if(nationstoshow.length<=10){
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
  else if (searchName === '') {
    return ( <div>
    {nationstoshow.map((nation,i) =>
      <div key={nation.numericCode}>{nation.name}</div>)}
    </div>
  )
  }
  else {
    return (
      <div>Too many matches, specify another filter</div>
    )
  }


}
const App = () => {
  const [nations,setNations] = useState([])
  const [searchName,setSearchName] = useState('')

  const hook = () => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setNations(response.data)
    })
  }

  useEffect(hook,[])

  const nationstoshow = nations.filter(nation => nation.name.toLowerCase().includes(searchName.toLowerCase()))

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }
  const showCountry = (event) => {
    event.preventDefault()
    setSearchName(event.target.value)
  }
  return (
    <div>
    <div>
      find countries <input value={searchName} onChange={handleSearchChange}/>
    </div>
    <Nations searchName={searchName} nationstoshow={nationstoshow} showCountry={showCountry}/>
    </div>
  );
}

export default App;
