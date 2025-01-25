import { useState } from "react";

const TypeFeedback = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Display = ({ value, text }) => {
  if (text === "positive") {
    return (
      <tr>
        <td>{text}</td>
        <td>{value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const totalFeedback = good + neutral + bad;
  const average = (good - bad) / totalFeedback;
  const poistive = (good / totalFeedback) * 100;
  if (totalFeedback === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        <Display text="good" value={good} />
        <Display text="neutral" value={neutral} />
        <Display text="bad" value={bad} />
        <Display text="all" value={totalFeedback} />
        <Display text="average" value={average} />
        <Display text="positive" value={poistive} />
      </tbody>
    </table>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };
  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <TypeFeedback handleClick={handleGood} text={"good"} />
      <TypeFeedback handleClick={handleNeutral} text={"neutral"} />
      <TypeFeedback handleClick={handleBad} text={"bad"} />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
