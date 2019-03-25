import React, { Component } from 'react';

class Plans extends Component {

  state = {
    plans: [{
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans']
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans']
    },
    {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      benefits: ['Crush it like Gaines', 'Personalization', 'Save Money', 'Meal plans']
    }]

  }

  renderPlans(){
    return this.state.plans.map(plan => {
      return (
        <div className="ui link cards">
          <div className="card">
            <div class="image">
              <h1>$25 per Session</h1>
            </div>
            <div className="content">
              <div className="description">
                <p>{plan.description}</p>
              </div>
              <div className="extra-content">
                <ul>
                  <li>{plan.benefits[0]}</li>
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
      <div className="container plans-section">
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