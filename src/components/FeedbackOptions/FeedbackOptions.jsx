import React from 'react';
import SectionTitle from '../Section/Section_title'
import css from './FeedbackOptions.module.css'

const FeedbackOptions  = ({good, neutral, bad}) => {
  return (
    
    <SectionTitle className={css.FeedbackOptions} title="Please, leave your feedback">
      <div className={css.buttonBlock}>
      <button type='button' className={css.bItem} onClick={good}>Good</button>
        <button type='button' className={css.bItem} onClick={neutral}>Neutral</button>
        <button type='button' className={css.bItem} onClick={bad}>Bad</button>
        </div>
      </SectionTitle>  
      // </div>
  );
};

export default FeedbackOptions;