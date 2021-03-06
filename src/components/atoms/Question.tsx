import React, { useState } from 'react';
// import { IQuestion } from '../../interfaces/question'

interface IProps {
  question: any;
  changeQuestion: (bonus: number) => void;
};

const Question = ({ question: { question, answerChoices: answers, correctAnswer }, changeQuestion }: IProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState(-1);
  const [className, setClassName] = useState('');
  const [answering, setAnswering] = useState(false);

  const checkAnswer = (selectedAnswer: number) => {
    if (answering) return;
    setAnswering(true);
    setSelectedAnswer(selectedAnswer);

    const classToApply = selectedAnswer === correctAnswer ? 'correct' : 'incorrect';
    const bonus = selectedAnswer === correctAnswer ? 10 : 0;

    setClassName(classToApply);

    setTimeout(() => {
      setSelectedAnswer(-1);
      setAnswering(false);
      changeQuestion(bonus);
    }, 1000);

  }

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      {answers.map((answer: string, index: number) => (
        <div
          className={`choice-container ${selectedAnswer === index && className}`}
          key={`optn-${index}`}
          onClick={() => checkAnswer(index)}
        >
          <p className="choice-prefix">{index + 1}</p>
          <p className="choice-text" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      ))}
    </div>
  );
};

export default Question;
