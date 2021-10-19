import { useState, useEffect } from 'react'
import axios from 'axios'

export const useField = (type) => {
    const [value, setValue] = useState('')
  
    const onChange = (event) => {
      setValue(event.target.value)
    }
  
    return {
      type,
      value,
      onChange
    }
}

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)
 
    useEffect(() => {
        async function getCountryData() {
            try {
                const response = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`)
                setCountry({
                    found: true,
                    data: {
                        name: response.data[0].name,
                        capital: response.data[0].capital,
                        population: response.data[0].population,
                        flag: response.data[0].flags.svg 
                    }
                })
            } catch(err) {
                if (err instanceof TypeError) {
                    setCountry('not found')
                } else {
                    setCountry(null)
                }
            }
        }
        getCountryData()
    },[name])
  
    return country
}