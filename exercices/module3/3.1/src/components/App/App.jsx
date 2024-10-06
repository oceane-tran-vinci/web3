import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Button from '../Button/Button';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //Event handlers for buttons clicks
    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);

  // Calulate statistics
  const total = good + neutral + bad;
  // average vérifie pas si total est égal à zéro avant de faire la division. Si total est zéro, cela entraînera une erreur de division par zéro.
  const average = total === 0 ? 0 : (good - bad) / total ; 
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        average={average} 
        positivePercentage={positivePercentage} 
      />
    </div>
    //toFixed(2) formate le nombre avec exactement deux chiffres après la virgule. 
    //pas obliger de mettre (voir dans ex 1.7)
  );
};

export default App;