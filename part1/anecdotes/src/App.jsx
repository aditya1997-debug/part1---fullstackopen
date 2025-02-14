import { useState } from 'react'

const Heading = (props) => <h1>{props.text}</h1>
const Button = (props) => {
  // console.log(props);
  return (
    <div>
      <button onClick={props.onClick}>
      {props.text}
      </button>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const copy = [...votes]


  const generateRandom = () => {
    const x = Math.floor(Math.random() * anecdotes.length);
    setSelected(x)
  }

  const vote = () => {
    copy[selected] += 1
    setVotes(copy)
  }

  const max_votes = Math.max(...votes)
  const index_of_max_votes = votes.indexOf(max_votes)
  

  return (
    <div>
      <Heading text="Anecdote of the Day"/>
      {anecdotes[selected]} has {votes[selected]} votes
      <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
        <Button text="Vote" onClick={vote}/>
        <Button text="Next anecdote" onClick={generateRandom}/>
      </div>
      <Heading text="Anecdote with Most Votes"/>

      {max_votes === 0 ? (
        <p>No votes</p>
      ) : (
        <p>{anecdotes[index_of_max_votes]}</p>
      )}
      
    </div>
  )
}

export default App