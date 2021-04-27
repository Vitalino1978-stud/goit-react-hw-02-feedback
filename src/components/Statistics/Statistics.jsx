import React from 'react';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import './Statistics.css';

const Statistics = ({ good, neutral, bad, countTotalFeedback, percentage }) => {
  

  return (
    <div className="Statistics">
      <h2>Statistics</h2>
      <ul className="Statistic_list">
        <li className="Statistic_item">Good{good}</li>
        <li className="Statistic_item">Neutral{neutral}</li>
        <li className="Statistic_item">Bad{bad}</li>
      </ul>
      <h3>Total:{countTotalFeedback}</h3>
      <h3>Positive feedback:{percentage}%</h3>
    </div>
  )
}

export default Statistics;