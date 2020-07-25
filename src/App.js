import React, { Component } from 'react';
import './App.css';

///import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';*/}

import Form from './Form/Form';
import Table from './Table/Table';
import Headline from './Headline/Headline';
import Info1 from './Info1/Info1';
import Table1 from './Table1/Table1';
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
      date: '',
      weight: '',
      items: [],
      items1: []
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

  handleFormSubmit1 = (e) => {
    e.preventDefault();

    let items1 = [...this.state.items1];

    items1.push({
      date: this.state.date,
      weight: this.state.weight,
      
    });

    this.setState({
      items1,
      weight: '',
      date: ''
      
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

  /*removeItems = (p) => {
    var array = this.state.items;
    var index = array.indexOf(p.target.value); 
    delete array[index];
  };*/
  

  render() {
    return (
      <div className="App">
        <Headline />
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newUsername={ this.state.username }
          newPassword={ this.state.password }
          newEmail={ this.state.email}
          newDW={ this.state.dw} 
          newDMC={ this.state.dmc}
          newDAC= { this.state.dac}
          indeX= { this.removeItems}/>
          

          <button id="logout" type="submit" value="Submit1">Log out</button>
          
          <br></br>
        <Table items={ this.state.items }/>

        
        <Info1 handleFormSubmit1={ this.handleFormSubmit1 } 
        handleInputChange1={ this.handleInputChange }
        newDate={ this.state.date }
        newWeight={ this.state.weight }/>

        <Table1 items1={ this.state.items1 }/>

        {/*<Dashboard />*/}
      </div>
    );
  }
}

export default App;