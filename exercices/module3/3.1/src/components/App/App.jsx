import React, { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //3 : Loading
  // définir loading sur true au début
  const [loading, setLoading] = useState(true);

  //set loading to false after 3 seconds
  setTimeout(() => setLoading(false), 3000);

  //afficher Loading pendant 3 secondes
  if (loading) return <Loading />;


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

  /* autre solution (prof)
  const handleClick = (e) => {
    if (e.target.className === 'good') setGood(good + 1);
    else if (e.target.className === 'neutral') setNeutral(neutral + 1);
    else setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={handleClick} value="good" />

      <Button onClick={handleClick} value="neutral" />

      <Button onClick={handleClick} value="bad" />

      <h1>statistics</h1>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
  */
};

export default App;