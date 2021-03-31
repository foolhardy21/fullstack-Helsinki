import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Nations from './components/Nations.js'

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
