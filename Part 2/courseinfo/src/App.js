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

const App=() => {
  const courses = [
    {
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
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
]
  return (
    <div>
    {courses.map((course,i) => <Course key={i} course={course}/>)}
    </div>
  );
}

export default App;
