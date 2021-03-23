import React, {useState} from 'react'

const Button = ({title,handleClick}) => {
  return (
    <button onClick={handleClick}>{title}</button>
  )
}

const Statistics= ({text,value}) => {
  if(text==="positive")
  {return (
    <tr>
    <td>{text}</td>
    <td>{value}%</td>
    </tr>
  )
  }
  return (
    <tr>
    <td>{text}</td>
    <td>{value}</td>
    </tr>
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

  if(all===0)
  {
    return (
      <div>
      <h1>give feedback</h1>
      <Button title="good" handleClick={updateGood} />
      <Button title="neutral" handleClick={updateNeutral} />
      <Button title="bad" handleClick={updateBad} />
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
    <h1>give feedback</h1>
    <Button title="good" handleClick={updateGood} />
    <Button title="neutral" handleClick={updateNeutral} />
    <Button title="bad" handleClick={updateBad} />
    <h1>statistics</h1>
    <table>
    <tbody>
    <Statistics text="good" value={good}/>
    <Statistics text="neutral" value={neutral} />
    <Statistics text="bad" value={bad} />
    <Statistics text="all" value={all} />
    <Statistics text="average" value={(good-bad)/all} />
    <Statistics text="positive" value={(good/all)*100} />
    </tbody>
    </table>
    </div>
  );

}

export default App;
