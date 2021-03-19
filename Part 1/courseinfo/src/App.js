import React from 'react';

const Header = (props) => {
  return (
    <h1>{props.coursename}</h1>
  )
}
const Part = (props) => {
  return (
    <p>{props.name} {props.ex}</p>
  )
}
const Content = (props) => {
  return (
    <div>
    <Part name={props.name1} ex={props.ex1}/>
    <Part name={props.name2} ex={props.ex2}/>
    <Part name={props.name3} ex={props.ex3}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.ex1+props.ex2+props.ex3}</p>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header coursename={course}/>
      <Content name1={part1.name} ex1={part1.exercises}
               name2={part2.name} ex2={part2.exercises}
               name3={part3.name} ex3={part3.exercises}
      />
      <Total ex1={part1.exercises} ex2={part2.exercises}
      ex3={part3.exercises}/>
    </div>
  )
}

export default App;
