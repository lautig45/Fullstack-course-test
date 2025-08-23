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
        <Display text="good " value={good} />
        <Display text="neutral " value={neutral} />
        <Display text="bad " value={bad} />
        <Display text="all " value={all} />
        <Display text="average " value={(good - bad) / all} />
        <Display text="positive " value={(good / all) * 100 + ' %'} />
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