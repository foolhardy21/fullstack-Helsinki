import React, {useState} from 'react'

const App= () => {
  const [persons,setPersons] = useState([{name: 'Arto Hellas'}])
  const [newName,setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
  }
  const addName = (event) => {
    event.preventDefault()
    const nameobject = {
      name: newName
    }
    setPersons(persons.concat(nameobject))
    setNewName('')
  }

  return (
      <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleChange}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i) => <div key={i}>{person.name}</div>)}
      </div>
  )
}

export default App;
