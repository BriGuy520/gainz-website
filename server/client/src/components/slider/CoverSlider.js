import React, { Component } from 'react';
import Carousel from 're-carousel';
import Buttons from '../../widgets/buttons';
import IndicatorDots from '../../widgets/indicator-dots';
import Cover1 from './Cover1';
import Cover2 from './Cover2';
import Cover3 from './Cover3';

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
        <Carousel loop auto widgets={[IndicatorDots, Buttons]}>
            <div style={{backgroundColor: 'tomato', height: '100%'}}>
              <Cover1 />
            </div>
            <div style={{backgroundColor: 'orange', height: '100%'}}>
              <Cover2 />
            </div>
            <div style={{height: '100%'}}>
              <Cover3 />
            </div>
          </Carousel>
      );
    } else {
      return (
        <Carousel loop widgets={[IndicatorDots, Buttons]}>
          <div style={{backgroundColor: 'tomato', height: '100%'}}>
            <Cover1 />
          </div>
          <div style={{backgroundColor: 'orange', height: '100%'}}>
            <Cover2 />
          </div>
          <div style={{height: '100%'}}>
            <Cover3 />
          </div>
        </Carousel>
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
