import React from 'react';
import gainzBook from '../../images/IMG_1165.png';

const Cover3 = () => {
  return (
    <div className="cover3">
      <div className="cover3-info">
        <div className="cover3-copy">
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
        <img src={gainzBook} alt="gainz book" style={{'width': '38%', 'height': '80%'}}/>
      </div>
    </div>
  )
}

export default Cover3;