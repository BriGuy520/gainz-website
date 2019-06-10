import React, { Component } from 'react';

class Plans extends Component {

  state = {
    plans: [{
      type: "Basic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Affordable', 'Personalized Workouts', 'Weekly Progress Reports'],
      price: 25
    },
    {
      type: "Balanced",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Personalized Workouts', 'Bi-Weekly Progress Reports', 'Basic Meal Plans'],
      price: 50
    },
    {
      type: "Intense",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Personalized Workouts', 'Daily Progress Reports', 'Detailed Meal Plans'],
      price: 100
    }]

  }

  renderPlans(){
    return this.state.plans.map(plan => {
      return (
          <div className="card">
            <div class="plan-choices">
              <span className="types">{plan.type}</span>
              <h3><span className="price">${plan.price}</span>/Session</h3>
            </div>
            <div className="content pad-list">
              <div className="description">
                <p>{plan.description}</p>
              </div>
              <div className="extra-content">
                <ul>
                  {plan.benefits.map(benefit => <li>{benefit}</li>)} 
                </ul>
              </div>
            </div>
            <button className="ui button red action-button">
              <a href="#">
                Buy Now
              </a>
            </button>
          </div>
      );
    });
  }

  render(){
    return (
      <div id="plans" className="plans-section">
        <h1 className="headline">Pick a Plan That Works for You.</h1>
        <p className="sub-headline">No need to box yourself in. Pick a plan that works best for your schedule and budget.</p>
        <div className="plan-cards">
          {this.renderPlans()}
        </div> 
      </div>  
    );
  }
}

export default Plans;