import React from 'react';
import Section_title from '../Section/Section_title'

const FeedbackOptions  = ({good, neutral, bad}) => {
  return (
   <Section_title title="Please, leave feedback">
      <button type='button' onClick={good}>Good</button>
        <button type='button' onClick={neutral}>Neutral</button>
        <button type='button' onClick={bad}>Bad</button>
      </Section_title>  
      // </div>
  );
};

export default FeedbackOptions;