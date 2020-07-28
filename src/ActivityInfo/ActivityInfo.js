import React, { Component } from 'react';

import './ActivityInfo.css';
class ActivityInfo extends React.Component {
  render() {
    return (
      <div id="RegForm">
        <h3>Information Desk</h3>  
        <form className="UserForm" onSubmit={this.props.handleFormSubmit3}>

          <label className="label3" htmlFor="date">
          Date:
          <input id="date" value={this.props.newDate} 
            type="date" name="date"
           onChange={this.props.handleInputChange3} />
    </label> 

    

          
          <label className="label3" htmlFor="actvityType">
          Activity Type:
          <select id="activityType" value={this.props.newActivity} 
            type="text" name="activityType"
            onChange={this.props.handleInputChange3} >
            <option value="Hiking">Hiking</option>
            <option value="Running">Running</option>
            <option value="Swiming">Swiming</option> 
         </select>
        
          </label>

          <label className="label3" htmlFor="weight">
          Distance:
          <input id="burnedCalories" value={this.props.newBurnedCalories} 
            type="number" name="burnedCalories"
            onChange={this.props.handleInputChange3} />
          </label>


        
          <button type="submit" value="Submit">Add</button>
          <br></br>
          
        </form>
      </div>
    );
  }
}

export default ActivityInfo;