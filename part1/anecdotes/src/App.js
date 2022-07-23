import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))

  // event handlers for button clicks
  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const handleNextAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  // helper functions
  const getAnecdoteWithMostVotes = () => votes.indexOf(Math.max(...votes))

  return (
    <div>

      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} index={selected} />
      <VoteCount votes={votes} index={selected} />
      <Button text='vote' handleClick={handleVoteClick} />
      <Button text='next anecdote' handleClick={handleNextAnecdoteClick} />

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} index={getAnecdoteWithMostVotes()} />
      <VoteCount votes={votes} index={getAnecdoteWithMostVotes()} />

    </div>
  )
}


const VoteCount = ({votes, index}) => <p>has {votes[index]} votes</p>


const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>


const Anecdote = ({anecdotes, index}) => <p>{anecdotes[index]}</p>

export default App