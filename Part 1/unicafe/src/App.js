import React, {useState} from 'react'

const Button = ({title,handleClick}) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}
const Display = ({text,count}) => {
  return (
    <p>{text} {count}</p>
  )
}

const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const updateGood = () => {
    setGood(good+1)
  }
  const updateNeutral = () => {
    setNeutral(neutral+1)
  }
  const updateBad = () => {
    setBad(bad+1)
  }
  return (
    <div>
    <h1>give feedback</h1>
    <Button title="good" handleClick={updateGood} />
    <Button title="neutral" handleClick={updateNeutral} />
    <Button title="bad" handleClick={updateBad} />
    <h1>statistics</h1>
    <Display text="good" count={good} />
    <Display text="neutral" count={neutral} />
    <Display text="bad" count={bad} />
    </div>
  );
}

export default App;
