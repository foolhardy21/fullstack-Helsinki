import React, {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App= () => {
  const [persons,setPersons] = useState([
    {name: 'Arto Hellas',number: '040-44-1234567'},
    {name: 'Rahul Kohli',number: '031-81-1234567'},
    {name: 'Bear Jew',number: '022-49-1234567'},
    {name: 'Emmanuel Skarsgard',number: '067-98-1234567'}
  ])
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName,setSearchName] = useState('')

  const personstoshow = persons.filter(person => person.name.includes(searchName))

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }
  const handlenameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlenumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addAccount = (event) => {
    event.preventDefault()
    var unique = persons.find(person => person.name === newName)
    if(typeof unique === 'undefined'){
    const nameobject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(nameobject))
  }
  else {
    window.alert(`${newName} is already added to the phonebook`)
  }
  setNewName('')
  setNewNumber('')
  }

  return (

      <div>
      <h2>Phonebook</h2>
      <Filter title="filter shown with"
      name={searchName} handleFunction={handleSearchChange} />
      <h2>Add a New</h2>
      <PersonForm addAccount={addAccount} newName={newName}
      handlenameChange={handlenameChange} newNumber={newNumber}
      handlenumberChange={handlenumberChange} />
      <h2>Numbers</h2>
      <Persons personstoshow={personstoshow} />
      </div>
  )
}

export default App;
