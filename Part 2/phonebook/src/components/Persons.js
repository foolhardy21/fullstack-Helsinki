import React from 'react'

const Persons = ({personstoshow}) => {
  return (
    <div>{personstoshow.map(person =>
      <div key={person.id}>{person.name} {person.number}</div>
    )}
    </div>
  )
}

export default Persons
