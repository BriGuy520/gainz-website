import React from 'react';
import gainzBook from '../../images/IMG_1165.png';

const CoverThree = () => {
  return (
    <div className="cover-three">
      <img src={gainzBook} alt="gainz book" />
      <div className="copy">
        <h1>Read the Book</h1>
        <ul>
          <li>How to Eat</li>
          <li>How to Workout</li>
          <li>How to Stay Lean</li>
        </ul>
        <button className="ui button red survey-button">
          <a href="#">
            Buy Now
          </a>
        </button>
      </div>
    </div>
    
  )
}

export default CoverThree;