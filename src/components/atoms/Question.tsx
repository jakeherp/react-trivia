import React from 'react'

interface IProps {
  question: {
    question: string;
    answerChoices: string[];
  };
}

const Question = ({ question: { question, answerChoices: answers } }: IProps) => {
  return (
    <div>
      <h2>{question}</h2>
      {answers.map((answer, index) => (
        <div className="choice-container" key={`optn-${index}`}>
          <p className="choice-prefix">{index + 1}</p>
          <p className="choice-text">{answer}</p>
        </div>
      ))}
    </div>
  )
}

export default Question
