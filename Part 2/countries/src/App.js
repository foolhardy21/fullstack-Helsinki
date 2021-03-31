import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    //const api=`http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`
  const[weatherreport,setweatherreport] = useState([])

  const hook2 = () => {
    axios.get(api)
    .then(response => {
      setweatherreport(response.data)
    })
  }
  useEffect(hook2,[])
  console.log()
  return (
    <div>
    <div><b>temperature is:</b> {weatherreport?.current?.temperature} Celsius</div>
    <div><img alt="Sky view" src={weatherreport?.current?.weather_icons} height="50" width="50"/></div>
    <div><b>wind:</b>{weatherreport?.current?.wind_speed} mph direction {weatherreport?.current?.wind_dir}</div>
    </div>
  )
}
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

const AllNations = ({nationstoshow}) => {
  return (
    <div>
      {nationstoshow.map((nation,i) =>
        <div key={nation.numericCode}>{nation.name}</div>)}
    </div>
  )
}
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
