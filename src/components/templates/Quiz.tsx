import React from 'react';
import Question from '../atoms/Question';

const dummyQuestion = {
  question: 'Best programming language?',
  answerChoices: [
    'Java',
    'JavaScript',
    'PHP',
    'C#'
  ]
}

const Quiz: React.FC = () => {
  return (
    <>
      <Question question={dummyQuestion} />
    </>
  );
};

export default Quiz;
