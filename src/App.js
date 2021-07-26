import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import Section from './components/section/Section';
import FeedbackOptions from './components/feadback/FeedbackOptions';
import Statistics from './components/statistics/Statistics';
import Notification from './components/statistics/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateStats = a => {
    this.setState(prevState => ({
      [a]: prevState[a] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedback = Math.floor(
      (good * 100) / this.countTotalFeedback(),
    );
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Layout>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateStats}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title="No feedbacks" />
          )}
        </Section>
      </Layout>
    );
  }
}

export default App;