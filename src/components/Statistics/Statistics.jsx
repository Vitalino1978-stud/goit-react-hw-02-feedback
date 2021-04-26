import React from 'react';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, countTotalFeedback, percentage }) => {
  

  return (
    <div className={css.Statistics}>
      <h2>Statistics</h2>
      <ul className={css.Statistic_list}>
        <li className={css.Statistic_item}>Good{good}</li>
        <li className={css.Statistic_item}>Neutral{neutral}</li>
        <li className={css.Statistic_item}>Bad{bad}</li>
      </ul>
      <h3>Total:{countTotalFeedback}</h3>
      <h3>Positive feedback:{percentage}%</h3>
    </div>
  )
}

export default Statistics;