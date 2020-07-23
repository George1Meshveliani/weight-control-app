import React, { Component } from 'react';

import './Form.css';
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>During the registration, please consider following: desired weight-DW, desired meal calories per day-
            DMC, desired activity calories per day-DAC</h3>  
        <form className="UserForm" onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="username">
          Username:
          <input id="username" value={this.props.newUsername} 
            type="text" name="username"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="password">
          Password:
          <input id="password" value={this.props.newPassword} 
            type="password" name="password"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="email">
          Email:
          <input id="email" value={this.props.newEmail} 
            type="email" name="email"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dw">
          DW:
          <input id="dw" value={this.props.newDW} 
            type="number" name="dw"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dmc">
          DMC:
          <input id="dmc" value={this.props.newDMC} 
            type="number" name="dmc"
            onChange={this.props.handleInputChange} />
          </label>
          <label for="dac">
          DAC:
          <input id="dac" value={this.props.newDAC} 
            type="number" name="dac"
            onChange={this.props.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Register</button>
          <br></br>
          <button id="logout" type="submit" value="Submit1">Log out</button>
        </form>
      </div>
    );
  }
}

export default Form;