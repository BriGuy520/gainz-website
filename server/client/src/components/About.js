import React from 'react';
import gainzCrushingIt from '../images/IMG_0261.jpg';

const About = () => {
  return (
    <div id="about" className="about-section">
      <h1>A Little Bit About John...</h1>
      <div className="about-image">
        <img alt="Gaines Crushing It" src={gainzCrushingIt} />
      </div>
      <div className="about-copy">
          <p>My name is Johnathan Gaines and I am a very cut and fit black guy</p>
          <p>Maybe I can help you become a very cut and fit black guy?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit vitae orci consectetur pellentesque. 
            Suspendisse sodales nibh sit amet blandit commodo. Etiam dictum iaculis libero non rhoncus. Sed sed luctus leo. 
            Quisque magna sem, consectetur non est ut, congue rhoncus dolor. Maecenas sed turpis iaculis, auctor massa ac, condimentum mi. 
            Proin gravida aliquet diam, in hendrerit ipsum commodo ut.
          </p>
          <p>
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque mollis ligula nec luctus bibendum. 
          Mauris non metus risus. Sed luctus auctor arcu, ac posuere mauris sodales id. Sed tempus augue ut nunc hendrerit, quis dictum ex lobortis. 
          Nam sollicitudin dui sed lacus volutpat tincidunt. Aliquam ac dui tempor, feugiat ipsum at, malesuada tellus. 
          Sed eu justo rhoncus, tincidunt enim ac, pharetra quam. Mauris tristique turpis et ornare luctus. Curabitur enim 
          lorem, accumsan vel facilisis vel, aliquet vel justo. Vivamus non ultricies leo, vel sagittis ipsum. Nulla vel vulputate ex. 
          Sed luctus lobortis ligula.
          </p>
      </div>
    </div>
  );
}

export default About;