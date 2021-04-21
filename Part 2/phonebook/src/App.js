import React, {useState,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import personService from './services/persons'

const App= () => {
  const [persons,setPersons] = useState([])
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchName,setSearchName] = useState('')
  const [confirmMessage,setConfirmMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  },[])

  const personstoshow = persons.filter(person => person.name.includes(searchName))

  const deleteAccount = (event) => {
    event.preventDefault()
    const id = (event.target.value)
    const personname = persons.find(person => person.id === id)
    if(window.confirm(`Delete ${personname.name}?`)){
      personService
      .remove(id)
      .then(response => {
          setPersons(persons.filter(person => person.id !== id))
      })
    }

  }
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

    personService
    .create(nameobject)
    .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
    })
    setConfirmMessage(`Added ${newName}.`)
    setTimeout(() => {
      setConfirmMessage(null)
    },5000)

  }
  else {
       if(window.confirm(`${newName} is already added to the phonebook,replace the old number with the new one ?`))
       {
         const changedPerson = {...unique,number:newNumber}
         personService.update(changedPerson)
         .then(responsedata => {
           setPersons(persons.map(person => person.id===responsedata.id?responsedata:person))
           setConfirmMessage(`Updated ${newName}.`)
           setTimeout(() => {
             setConfirmMessage(null)
           },5000)

        })
         .catch(error => {
           console.log(newName)
           setPersons(persons.filter(person => person.name !== newName))
           setConfirmMessage(`Information of ${newName} was already deleted from the server`)
           setTimeout(() => {
             setConfirmMessage(null)
           },5000)

         })

       }
  }

  setNewName('')
  setNewNumber('')
  }

  return (

      <div>
      <h2>Phonebook</h2>
      <Notification message={confirmMessage} />
      <Filter title="filter shown with"
      name={searchName} handleFunction={handleSearchChange} />
      <h2>Add a New</h2>
      <PersonForm addAccount={addAccount} newName={newName}
      handlenameChange={handlenameChange} newNumber={newNumber}
      handlenumberChange={handlenumberChange} />
      <h2>Numbers</h2>
      <Persons personstoshow={personstoshow} deleteAcc={deleteAccount}/>
      </div>
  )
}

export default App;
