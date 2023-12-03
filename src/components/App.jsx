import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Layout } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    this.setState(prevState => {
      return {
        [e]: prevState[e] + 1,
      };
    });
  };
  totalCountFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good, neutral, bad }) =>
    Math.round((good / this.totalCountFeedback(this.state)) * 100);
  render() {
    const options = Object.keys(this.state);
    return (
      <Layout>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={options}
              leaveFeedback={this.leaveFeedback}
            />
          }
        />
        <Section
          title="Statistics"
          children={
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalCountFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          }
        />
      </Layout>
    );
  }
}
