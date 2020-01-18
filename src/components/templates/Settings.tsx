import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Settings: React.FC = () => {
  return (
    <>
      <h1>Settings</h1>
      <form>
        <label htmlFor="difficulty">
          <div>
            Difficulty
            <select>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            Number of questions
            <input type="range" name="points" min="5" max="30" step="5" value={15} />
            15
          </div>
        </label>
      </form>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </>
  );
};

export default Settings;
