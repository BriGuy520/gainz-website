import React, { Component } from 'react';
import Carousel from 're-carousel';
import Cover from './Cover';

const CoverSlider = () => {
  return (
    <div className="slider"> 
      <Carousel auto>
        <div style={{backgroundColor: 'tomato', height: '100%'}}>
          <Cover />
        </div>
        <div style={{backgroundColor: 'orange', height: '100%'}}>Frame 2</div>
        <div style={{backgroundColor: 'orchid', height: '100%'}}>Frame 3</div>
      </Carousel>
    </div>
    
  );
}

export default CoverSlider;
