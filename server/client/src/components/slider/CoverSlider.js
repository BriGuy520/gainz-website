import React from 'react';
import Carousel from 're-carousel';
import Cover1 from './Cover1';
import Cover2 from './Cover2';

const CoverSlider = () => {
  return (
    <div className="slider"> 
      <Carousel loop auto>
        <div style={{backgroundColor: 'tomato', height: '100%'}}>
          <Cover1 />
        </div>
        <div style={{backgroundColor: 'orange', height: '100%'}}>
          <Cover2 />
        </div>
        <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
      </Carousel>
    </div>
    
  );
}

export default CoverSlider;
