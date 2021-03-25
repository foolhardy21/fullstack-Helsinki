import React from 'react'

const Header = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}
const Part = ({partname,partex}) => {
  return (
    <p>{partname} {partex}</p>
  )
}
const Content = ({parts}) => {
  return (
    <div>{parts.map(part =>
      <Part key={part.id} partname={part.name} partex={part.exercises}/>)}
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    </div>
  )
}
const App=() => {
  const course = {
    id:1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id:1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <Course course={course} />
  );
}

export default App;
