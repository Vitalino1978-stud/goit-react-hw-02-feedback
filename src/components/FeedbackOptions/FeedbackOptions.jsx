import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions  = ({good, neutral, bad}) => {
  return (
    
    <SectionTitle className="FeedbackOptions" title="Please, leave your feedback">
      <div className="buttonBlock">
      <button type='button' className="bItem" onClick={good}>Good</button>
        <button type='button' className="bItem" onClick={neutral}>Neutral</button>
        <button type='button' className="bItem" onClick={bad}>Bad</button>
        </div>
      </SectionTitle>  
      // </div>
  );
};

     FeedbackOptions.propTypes = {
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
};


export default FeedbackOptions;