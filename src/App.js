
import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
// import Statistics from './components/Statistics';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
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
    const total = good + neutral + bad;
    if (total !== 0) {
      return (
      <>
        <FeedbackOptions
          good={this.addGood}
          neutral={this.addNeutral}
          bad={this.addBad} />
      
        <div className="Statistcs">
          <h2>Statistics</h2>
          <ul>
            <li className="Statistic_item">Good{ good}</li>
            <li className="Statistic_item">Neutral{ neutral}</li>
            <li className="Statistic_item">Bad{ bad}</li>
          </ul>
          <h3>Total:{ this.countTotalFeedback() }</h3>
          <h3>Positive feedback:{ this.countPositiveFeedbackPercentage() }%</h3>
        </div>
        </>
    );
      
    }
    return (
      <>
    <FeedbackOptions
          good={this.addGood}
          neutral={this.addNeutral}
          bad={this.addBad} />
      
        <div className="Statistcs">
          <h2>Statistics</h2>
          <p>No feedback given yet...</p>
          
        </div>
        
      </>
    )
  }
}

export default App;