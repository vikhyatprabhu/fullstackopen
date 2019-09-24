import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return <p> {props.text} {props.value}</p>
}
const Statistics = (props) => {
  if (props.good > 0 || props.bad > 0 || props.neutral > 0) {
    return (
      <table>
        <tbody>
        <tr><Statistic text="good" value={props.good} /></tr>
        <tr><Statistic text="neutral" value={props.neutral} /></tr>
        <tr><Statistic text="bad" value={props.bad} /></tr>
        <tr><Statistic text="average" value={(props.good - props.bad) / (props.good + props.bad + props.neutral) || 0} /></tr>
        <tr><Statistic text="positive" value={(props.good / (props.good + props.bad + props.neutral) * 100 || 0) + "%"} /></tr>
       </tbody>
       </table>
      
    )

  } else {
    return <p> No statistics given</p>
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h3>statistics</h3>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)