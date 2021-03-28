import React, {useState} from 'react'

const App= () => {
  const [persons,setPersons] = useState([
    {name: 'Arto Hellas',number: '040-44-1234567'}
  ])
  const [newName,setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')

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
      <form onSubmit={addAccount}>
      <div>
        name: <input value={newName} onChange={handlenameChange}/>
      </div>
      <div>
        number: <input value={newNumber} onChange={handlenumberChange}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) => <div key={i}>{person.name} {person.number}</div>)}
      </div>
  )
}

export default App;
