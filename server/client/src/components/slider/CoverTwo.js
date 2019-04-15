import React from 'react';

const CoverTwo = () => {
  return (
    <div className="cover-two">
      <div className="copy cover-copy">
        <h1>What do you Want?</h1>
        <p>
          Get started by filling out a short survey to get a better 
          gauge of what your fitness goals are. 
        </p>
        <button className="ui button red btn survey-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0K6Cd3_EZdQcZTnOR6kUowWdVk2-hl34FqBiMpy4gw7JDtw/viewform">
            Take Survey
          </a>
        </button>
      </div>
    </div>
  );
}

export default CoverTwo;