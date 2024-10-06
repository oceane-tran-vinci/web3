import React from 'react';
import StatisticLine from '../Statistics/StatisticLine';

const Statistics = ({ good, neutral, bad, total, average, positivePercentage }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  /* autre solution (prof)
  const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) return <p>No feedback given</p>;

  const average = all !== 0 ? (good - bad) / all : 0;
  const positive = all !== 0 ? (good / all) * 100 : 0;

  return () : idem que le prof
  */
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="Total" value={total} />
          <StatisticLine text="Average" value={average.toFixed(2)} />
          <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;