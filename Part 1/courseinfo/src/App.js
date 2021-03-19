import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.coursename}</h1>
  )
}
const Part = ({name,ex}) => {
  return (
    //<p>hi</p>
    <p>{name} - {ex}</p>
  )
}
const Content = ({parts}) => {
  //console.log(parts[0])
  const [part1,part2,part3]=parts;
  return (
    <div>
    <Part name = {part1.name} ex={part1.exercises}/>
    <Part name = {part2.name} ex={part2.exercises}/>
    <Part name = {part3.name} ex={part3.exercises}/>
    </div>
  )
}
const Total = ({parts}) => {
  const [part1,part2,part3]=parts;
  return (
    <p>Number of exercises - {part1.exercises+part2.exercises+part3.exercises}</p>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
    name: "Fundamentals of React",
    exercises: 10
  },
  {
    name: "Using props to pass data",
    exercises: 7
  },
  {
    name: "State of a component",
    exercises: 14
  }
  ]

  return (
    <div>
      <Header coursename={course}/>
      <Content parts={parts}  />
      <Total parts={parts}    />
    </div>
  )
}

export default App;
