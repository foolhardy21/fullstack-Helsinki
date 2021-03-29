import React from 'react'

const Persons = ({personstoshow}) => {
  return (
    <div>{personstoshow.map((person,i) => <div key={i}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Persons
