import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Nations = ({searchName,nationstoshow}) => {
  if (nationstoshow.length === 1) {
    return (
      <div>
        <h1>{nationstoshow[0].name}</h1>
        <div>
        capital {nationstoshow[0].capital}
        </div>
        <div>
        population {nationstoshow[0].population}
        </div>
        <div>
        <h3>languages</h3>
        <ul>
        {nationstoshow[0].languages.map(
          language => <li key={language.name}>{language.name}</li>
        )}
        </ul>
        <div>
        <img src={nationstoshow[0].flag} height="100" width="100" />
        </div>
        </div>
      </div>
    )
  }
  else if(searchName === '' || nationstoshow.length<=10){
    return (
      <div>
      {nationstoshow.map((nation,i) => <div key={nation.numericCode}>{nation.name}</div>)}
      </div>
    )
  }

  else{
    return (
      <div>
      Too many matches, specify another filter
      </div>
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
  return (
    <div>
    <div>
      find countries <input value={searchName} onChange={handleSearchChange}/>
    </div>
    <Nations searchName={searchName} nationstoshow={nationstoshow} />
    </div>
  );
}

export default App;
