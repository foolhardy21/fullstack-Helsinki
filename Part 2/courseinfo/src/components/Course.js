import React from 'react'

const Header = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}
const Part = ({partname,partex}) => {
  return (
    <p>{partname} {partex}</p>
  )
}
const Total = ({parts}) => {
  return (
    <h4>total of {parts.reduce((sum,part) => sum+part.exercises,0)} exercises</h4>
  )
}
const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part =>
      <Part key={part.id} partname={part.name} partex={part.exercises}/>)}
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </div>
  )
}

export default Course
