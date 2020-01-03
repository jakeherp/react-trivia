import React, { useEffect, useState } from 'react';
import Question from '../atoms/Question';
import { loadQuestions } from '../../helpers/questions.helper';

import Loader from '../atoms/Loader';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    loadQuestions()
      .then(questions => setQuestions(questions))
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeQuestion = () => {
    const randomQuestionIndex = Math.floor(Math.random() * (questions.length - 1));
    const currentQuestion = questions[randomQuestionIndex];
    const remainingQuestions = [...questions]
    remainingQuestions.splice(randomQuestionIndex, 1)

    console.log('randomQuestionIndex', randomQuestionIndex)
    console.log('currentQuestion', currentQuestion)
    console.log('remainingQuestions', remainingQuestions)

    setCurrentQuestion(randomQuestionIndex)
    setQuestions(remainingQuestions)
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
