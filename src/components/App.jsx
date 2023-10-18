import { useReducer } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

function reducer(prevState, action) {
  if (action.type === 'good') {
    return {
      ...prevState,
      good: action.payload,
    };
  } else if (action.type === 'neutral') {
    return {
      ...prevState,
      neutral: action.payload,
    };
  } else {
    return {
      ...prevState,
      bad: action.payload,
    };
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = key => {
    if (key === 'good') dispatch({ type: 'good', payload: state.good + 1 });
    else if (key === 'neutral')
      dispatch({ type: 'neutral', payload: state.neutral + 1 });
    else dispatch({ type: 'bad', payload: state.bad + 1 });
  };
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () =>
    Math.round((state.good / countTotalFeedback()) * 100);

  const options = Object.keys(state);
  const totalFeedback = countTotalFeedback();
  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
