import { useState } from "react"

const Heading = () => <div><h1>give feedback</h1></div>

const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.good > 0 || props.neutral > 0 || props.bad > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statisticline text="good" value={props.good} />
            <Statisticline text="neutral" value={props.neutral} />
            <Statisticline text="bad" value={props.bad} />
            <Statisticline text="all" value={props.all} />
            <Statisticline text="average" value={props.average.toFixed(2)} />
            <Statisticline text="positive" value={`${props.positive.toFixed(2)} %`} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No Feedback Given</p>
      </div>
    );
  }
};


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  // const [positive, setPositive] = useState(0)

  const average = (good - bad)/all;
  const positive = (good/all) * 100;
  

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAll(updatedGood + bad + neutral);
  }

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAll(updatedBad + good + neutral);
  
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAll(updatedNeutral + good + bad);
    
  }

  

  return (
    <div>
      <Heading />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} positive={positive} average={average}/>
    </div>
  )
}


export default App;