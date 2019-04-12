import React, { Component } from 'react';

class Plans extends Component {

  state = {
    plans: [{
      type: "Basic",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 25
    },
    {
      type: "Balanced",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 50
    },
    {
      type: "Intense",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans'],
      price: 100
    }]

  }

  renderPlans(){
    return this.state.plans.map(plan => {
      return (
          <div className="card card-barrier">
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
          </div>
      );
    })

  }

  render(){
    return (
      <div id="plans" className="plans-section">
        <h1>Pick a Plan That Works for You.</h1>
        <p>No need to box yourself in. Pick a plan that works best for your schedule and budget.</p>
        <div className="plan-cards">
          {this.renderPlans()}
        </div> 
      </div>  
    );
  }
}

export default Plans;