import React from 'react'

const Persons = ({personstoshow, deleteAcc}) => {

  return (
    <div>{personstoshow.map(person =>
      <div key={person.id}>{person.name} {person.number}
      <button type="button" value={person.id} onClick={deleteAcc}>
      delete</button>
      </div>
    )}
    </div>
  )
}

export default Persons
