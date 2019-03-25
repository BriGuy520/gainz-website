import React, { Component } from 'react';

class Plans extends Component {

  state = {
    plans: [{
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 25
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 50
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 100
    }]

  }

  renderPlans(){
    return this.state.plans.map(plan => {
      return (
        <div className="ui link cards">
          <div className="card">
            <div class="image">
              <h1>${plan.price} per Session</h1>
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
          </div>
        </div>
      );
    })

  }

  render(){
    return (
      <div className="plans-section">
        <div className="container">
        <h1>Pick a Plan That Works for You.</h1>
        <p>No need to box yourself in. Pick a plan that works best for your schedule and budget.</p>
        <div className="plan-cards">
          {this.renderPlans()}
        </div> 
      </div> 
      </div>
        
    );
  }
}

export default Plans;