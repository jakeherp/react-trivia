import React, { useEffect, useState } from 'react';
import Question from '../atoms/Question';
import { loadQuestions } from '../../helpers/questions.helper';

import Loader from '../atoms/Loader';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    loadQuestions()
      .then(questions => setQuestions(questions))
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeQuestion = (bonus = 0) => {
    const randomQuestionIndex = Math.floor(Math.random() * (questions.length - 1));
    const remainingQuestions = [...questions]
    remainingQuestions.splice(randomQuestionIndex, 1)

    setCurrentQuestion(randomQuestionIndex)
    setQuestions(remainingQuestions)
    setScore(score + bonus)
  }

  return (
    <>
      {questions.length > 0 ? (
        <Question
          question={questions[currentQuestion]}
          changeQuestion={changeQuestion}
        />
      ) : (
          <Loader />
        )}
    </>
  );
};

export default Quiz;
