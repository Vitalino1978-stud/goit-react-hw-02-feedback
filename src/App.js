
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions'

class App extends Component {
  state = {
  good: 2,
  neutral: 5,
  bad: 7
  }

  addGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral +1,
      };
    });
  };
  addBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad +1,
      };
    });
  };
  // 
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const percentage = Math.round(100 * good/this.countTotalFeedback()) 
    return percentage;

  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions good={this.addGood}/>
      
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good{ good}</li>
            <li>Neutral{ neutral}</li>
            <li>Bad{ bad}</li>
          </ul>
          <h3>Total:{ this.countTotalFeedback() }</h3>
          <h3>Positive feedback:{ this.countPositiveFeedbackPercentage() }%</h3>
        </div>
        </>
    );
  }
}

export default App;