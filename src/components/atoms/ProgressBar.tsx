import React from 'react'

interface IProps {
  current: number;
  max: number;
}

const ProgressBar = ({ current, max }: IProps) => {
  const width = (current / max) * 100;

  return (
    <div id="progress-bar">
      <div id="progress-bar-full" style={{ width: `${width}%` }}></div>
    </div>
  )
}

export default ProgressBar
