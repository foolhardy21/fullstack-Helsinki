import React, {useState} from 'react'

const Button = ({title,handleClick}) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}
const Display = ({text,figure}) => {
  return (
    <p>{text} {figure}</p>
  )
}
const Statistics= ({good,neutral,bad,total}) => {

  return (
    <div>
    <Display text="good" figure={good} />
    <Display text="neutral" figure={neutral} />
    <Display text="bad" figure={bad} />
    <Display text="all" figure={total} />
    <Display text="average" figure={(good-bad)/total} />
    <p>positive {(good/total)*100} %</p>
    </div>
  )
}
const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const [all,setAll] = useState(0)

  const updateGood = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const updateNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
  }
  const updateBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }
  return (
    <div>
    <h1>give feedback</h1>
    <Button title="good" handleClick={updateGood} />
    <Button title="neutral" handleClick={updateNeutral} />
    <Button title="bad" handleClick={updateBad} />
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral}
     bad={bad} total={all} />
    </div>
  );
}

export default App;
