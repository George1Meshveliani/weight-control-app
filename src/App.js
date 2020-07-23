import React, { Component } from 'react';
import './App.css';

///import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';*/}

import Form from './Form/Form';
import Table from './Table/Table';
//import Headline from './Headline/Headline';
//import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      email: '',
      dw: '',
      dmc: '',
      dac: '',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      dw: this.state.dw,
      dmc: this.state.dmc,
      dac: this.state.dac,
    });

    this.setState({
      items,
      username: '',
      password: '',
      email: '',
      dw: '',
      dmc: '',
      dac: ''
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        {/*<Headline />*/}
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newUsername={ this.state.username }
          newPassword={ this.state.password }
          newEmail={ this.state.email}
          newDW={ this.state.dw} 
          newDMC={ this.state.dmc}
          newDAC= { this.state.dac}/>
        <Table items={ this.state.items }/>
        {/*<Dashboard />*/}
      </div>
    );
  }
}

export default App;