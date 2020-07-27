import React, { Component } from 'react';

import './Info1.css';
class Info1 extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Information Desk</h3>  
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
          
        </form>
      </div>
    );
  }
}

export default Info1;