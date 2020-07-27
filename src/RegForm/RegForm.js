import React, { Component } from 'react';

import './RegForm.css';
class RegForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    // const value = target.name === 'isTrue' ? target.checked : target.value;

    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  render() {
    return (
      <div id="RegForm">
        <h3>During the registration, please consider following: desired weight-DW, desired meal calories per day-
            DMC, desired activity calories per day-DAC</h3>  
        <form className="UserForm" onSubmit={this.handleSubmit}>
          <label htmlFor="username">
          Username:
          <input id="username" type="text" name="username"
            onChange={this.handleInputChange} />
          </label>
          <label for="password">
          Password:
          <input id="password" type="password" name="password"
            onChange={this.handleInputChange} />
          </label>
          <label for="email">
          Email:
          <input id="email" type="email" name="email"
            onChange={this.handleInputChange} />
          </label>
          <label for="dw">
          DW:
          <input id="dw" type="number" name="dw"
            onChange={this.handleInputChange} />
          </label>
          <label for="dmc">
          DMC:
          <input id="dmc" type="number" name="dmc"
            onChange={this.handleInputChange} />
          </label>
          <label for="dac">
          DAC:
          <input id="dac" type="number" name="dac"
            onChange={this.handleInputChange} />
          </label>
          <button type="submit" value="Submit">Register</button>
          <br></br>
          
        </form>
      </div>
    );
  }
}

export default RegForm;