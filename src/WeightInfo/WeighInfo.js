import React, { Component } from 'react';

import './WeightInfo.css';
class WeightInfo extends React.Component {
  

  render() {
    return (
      <div id="RegForm">
        <h3>Create Your Weight History</h3>  
        <form className="UserForm1" onSubmit={this.props.handleFormSubmit1}>
          <label className="label1" htmlFor="date">
          Date:
          <input id="date" value={this.props.newDate} 
            type="date" name="date"
           onChange={this.props.handleInputChange1} />
          </label>

          
          <label className="label1" htmlFor="weight">
          Weight:
          <input id="weight" value={this.props.newWeight} 
            type="number" name="weight"
            onChange={this.props.handleInputChange1} />
          </label>
        
          <button type="submit" value="Submit">Add</button>
          <br></br>
          <button type="button" onClick={this.props.goNextPage1}>Next</button>
          
          
        </form>
      </div>
    );
  }
}

export default WeightInfo;