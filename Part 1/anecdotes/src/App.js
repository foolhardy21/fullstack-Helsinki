import React,{useState} from 'react'

const Button = ({title,clickAction}) => {
  return (
    <button onClick={clickAction}>{title}</button>
  )
}

const Heading = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Paragraph = ({text}) => {
  return(
    <p>{text}</p>
  )
}
const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected,setSelected] = useState(0)
  const [vote,setVote] = useState(new Array(6).fill(0));

  const getnextAnecdote = () => {
    const pos = Math.floor((Math.random()*anecdotes.length)+0)
    setSelected(pos)
  }

  const updateVotes = () => {
    const copy = [...vote]
    copy[selected]+=1
    setVote(copy)
  }

  const maxvote = Math.max(...vote)
  const maxquote = anecdotes[vote.indexOf(maxvote)]

  return (
      <div>
      <Heading text="Anecdote of the day" />
      <Paragraph text={anecdotes[selected]} />
      <p>has {vote[selected]} votes</p>
      <Button title="next anecdote" clickAction={getnextAnecdote} />
      <Button title="vote" clickAction={updateVotes} />
      <Heading text="Anecdote with the most votes" />
      <Paragraph text={maxquote} />
      <p>has {maxvote} votes</p>
      </div>
  );
}

export default App;
