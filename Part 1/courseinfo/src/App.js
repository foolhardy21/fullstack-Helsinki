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
  const part1 = "Fundamentals of React"
  const exercises1=10
  const part2 = "Using props to pass data"
  const exercises2=7
  const part3 = "State of a component"
  const exercises3=14

  return (
    <div>
      <Header coursename={course}/>
      <Content name1={part1} ex1={exercises1}
               name2={part2} ex2={exercises2}
               name3={part3} ex3={exercises3}
      />
      <Total ex1={exercises1} ex2={exercises2}
      ex3={exercises3}/>
    </div>
  )
}

export default App;
