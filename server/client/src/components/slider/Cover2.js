import React from 'react';

const Cover2 = () => {
  return (
    <div className="cover2">
      <div className="cover2-copy"> 
        <h1>What do you Want?</h1>
        <p>
          Get started by filling out a short survey to get a better 
          gauge of what your fitness goals are. 
        </p>
        <button className="ui button red survey-button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0K6Cd3_EZdQcZTnOR6kUowWdVk2-hl34FqBiMpy4gw7JDtw/viewform">
            Take Survey
          </a>
        </button>
      </div>
    </div>
  );
}

export default Cover2;