import React, { Component } from 'react';

import './MealInfo.css';
class MealInfo extends React.Component {
  render() {
    return (
      <div id="RegForm">
        <h3>Create Your Meal List</h3>  
        <form className="UserForm" onSubmit={this.props.handleMealInfoSubmit}>

          <label className="label2" htmlFor="date">
          Date:
          <input id="date" value={this.props.newDate} 
            type="date" name="date"
           onChange={this.props.handleMealInputChange} />
          </label>

          
          <label className="label2" htmlFor="weight">
          Meal:
          <input id="meal" value={this.props.newMeal} 
            type="text" name="meal"
            onChange={this.props.handleMealInputChange} />
          </label>

          <label className="label2" htmlFor="weight">
          Calories:
          <input id="calories" value={this.props.newCalories} 
            type="text" name="calories"
            onChange={this.props.handleMealInputChange} />
          </label>


        
          <button type="submit" value="Submit">Add</button>
          <br></br>
          <button type="button" onClick={this.props.goToLastPage}>Next</button>
          
        </form>
      </div>
    );
  }
}

export default MealInfo;