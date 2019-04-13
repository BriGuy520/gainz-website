import React, { Component } from 'react';
import Carousel from 're-carousel';
import Buttons from '../../widgets/buttons';
import IndicatorDots from '../../widgets/indicator-dots';
import CoverOne from './CoverOne';
import CoverTwo from './CoverTwo';
import CoverThree from './CoverThree';

class CoverSlider extends Component {

  constructor(props){
    super(props);

    this.state = { showMenu: false, width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount(){
      this.updateWindowDimensions();
      window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount(){
      this.updateWindowDimensions();
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions(){
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  renderSlider(){
    if(window.innerWidth > 900){
      return (
        <div className="slider">
          <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
            <div style={{backgroundColor: 'tomato', height: '100%'}}>
              <CoverOne />
            </div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>
              <CoverTwo />
            </div>
            <div style={{height: '100%'}}>
              <CoverThree />
            </div>
          </Carousel>
        </div>
        
      );
    } else {
      return (
        <div className="slider">
          <Carousel loop widgets={[IndicatorDots, Buttons]}>
            <div style={{backgroundColor: 'tomato', height: '100%'}}>
              <CoverOne />
            </div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>
              <CoverTwo />
            </div>
            <div style={{height: '100%'}}>
              <CoverThree />
            </div>
          </Carousel>
        </div>
      );
    }
  }

  render(){
    return (
      <div className="slider"> 
        {this.renderSlider()}
      </div>
    );
  }
}

export default CoverSlider;
