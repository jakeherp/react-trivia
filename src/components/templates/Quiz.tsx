import React, { useEffect, useState } from 'react';
import Question from '../atoms/Question';
import { loadQuestions } from '../../helpers/questions.helper';

import Loader from '../atoms/Loader';
import Stats from '../molecules/Stats';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    loadQuestions()
      .then(questions => {
        setQuestions(questions)
        setQuestionNumber(questionNumber + 1);
      })
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeQuestion = (bonus = 0) => {
    if (questions.length - 1 === 0) {
      setDone(true);
      console.log("DONE!!!");
      return;
    };
    const randomQuestionIndex = Math.floor(Math.random() * questions.length);
    const remainingQuestions = [...questions]
    remainingQuestions.splice(randomQuestionIndex, 1)

    setCurrentQuestion(randomQuestionIndex)
    setQuestions(remainingQuestions)
    setScore(score + bonus)
    setQuestionNumber(questionNumber + 1);
  }

  return (
    <>
      {!done && (
        <>
          {questions.length >= 1 ? (
            <>
              <Stats score={score} questionNumber={questionNumber} />
              <Question
                question={questions[currentQuestion]}
                changeQuestion={changeQuestion}
              />
            </>
          ) : (
              <Loader />
            )}
        </>
      )}
    </>
  );
};

export default Quiz;
