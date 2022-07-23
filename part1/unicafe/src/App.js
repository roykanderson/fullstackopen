import { useState } from 'react'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handlers for button clicks
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  // stat computing functions
  const all = () => good + neutral + bad
  const average = () => (good * 1 + bad * -1) / all()
  const percentPositive = () => good / all()

  return (
    <div>
      <Heading text="give feedback"/>
      <Button text="good" handleClick={handleGoodClick}/>
      <Button text="neutral" handleClick={handleNeutralClick}/>
      <Button text="bad" handleClick={handleBadClick}/>
      <Heading text="statistics" />
      <table>
        <tbody>
          <TableRow text="good" count={good} />
          <TableRow text="neutral" count={neutral} />
          <TableRow text="bad" count={bad} />
          <TableRow text="all" count={all()} />
          <TableRow text="average" count={average()} />
          <TableRow text="positive" count={100 * percentPositive()} />
        </tbody>
      </table>
    </div>
  )
}


const Heading = ({ text }) => <h1>{text}</h1>


const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>


const TableRow = ({ text, count }) => {

  // display n/a if count is not a number
  if (isNaN(count)) {
    return (
      <tr>
        <td>{text}</td>
        <td>{"n/a"}</td>
      </tr>
    )
  }

  else if (text === 'positive') {
    return (
      <tr>
        <td>{text}</td>
        <td>{count}%</td>
      </tr>
    )
  }
  
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  )
}


export default App