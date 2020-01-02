import React, { useEffect, useState } from 'react';
import Question from '../atoms/Question';
import { loadQuestions } from '../../helpers/questions.helper';

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const questions = await loadQuestions();
        setQuestions(questions)
      } catch (err) {
        console.error(err)
      }
    }
    fetchQuestions();
  }, []);

  console.log(questions);

  return (
    <>
      {questions.length > 0 && (
        <Question question={questions[currentQuestion]} />
      )}
    </>
  );
};

export default Quiz;
