import React from 'react'

import ProgressBar from '../atoms/ProgressBar';

interface IProps {
  score: number;
  questionNumber: number;
}

const Stats = ({ score, questionNumber }: IProps) => {
  return (
    <div id="hud">
      <div className="hud-item">
        <p className="hud-prefix">Question {questionNumber} / 15</p>
        <ProgressBar current={questionNumber} max={15} />
      </div>
      <div className="hud-item">
        <p className="hud-prefix">Score</p>
        <h1 className="hud-main-text">{score}</h1>
      </div>
    </div>
  )
}

export default Stats
