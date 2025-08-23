import { useState } from 'react'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )
}

const Header = (props) => {
  return (  
    <h1>
      {props.text}
    </h1>
    )
}

const Display = (props) => {
  return (
    <p>
      {props.text}{props.value}
    </p>
  )
}

const statisticsLine = (text, value) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const setValue = (value, setter) => {
  console.log('value now', value)
  setter(value)
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  console.log(all)
  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            {statisticsLine('good', good)}
            {statisticsLine('neutral', neutral)}
            {statisticsLine('bad', bad)}
            {statisticsLine('all', all)}
            {statisticsLine('average', (good - bad) / all)}
            {statisticsLine('positive', (good / all) * 100 + ' %')}
          </tbody>
        </table>
      </div>
    )
  }
}
  

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={() => setValue(good+1, setGood)} text="good" />
      <Button handleClick={() => setValue(neutral+1, setNeutral) } text="neutral" />
      <Button handleClick={() => setValue(bad+1, setBad)} text="bad" />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App