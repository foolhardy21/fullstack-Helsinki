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

export default Weather
