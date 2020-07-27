import React, { Component } from 'react';
import './App.css';

///import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';*/}

import Form from './Form/Form';
import Table from './Table/Table';
import Headline from './Headline/Headline';
import Info1 from './Info1/Info1';
import Table1 from './Table1/Table1';
import Info2 from './Info2/Info2';
import Table2 from './Table2/Table2';
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

      meal: '',
      calories: '',

      items: [],
      items1: [],
      items2: []
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

      date: this.state.date,
      weight: this.state.weight,

      meal: this.state.meal,
      calories: this.state.calories,
    });

    this.setState({
      items,
      username: '',
      password: '',
      email: '',
      dw: '',
      dmc: '',
      dac: '',

      weight: '',
      date: '',

      meals: '',
      calories: '',
    });
  };

  handleFormSubmit1 = (e) => {
    e.preventDefault();

    let items1 = [...this.state.items1];

    items1.push({
      date: this.state.date,
      weight: this.state.weight,
      dw: this.state.dw,
    });

    this.setState({
      items1,
      weight: '',
      date: '',
      dw: ''
    });
  };

  handleFormSubmit2 = (e) => {
    e.preventDefault();

    let items2 = [...this.state.items2];

    items2.push({
      date: this.state.date,
      meal: this.state.meal,
      calories: this.state.calories,

    });

    this.setState({
      items2,
      date: '',
      meal: '',
      dw: ''
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
        newWeight={ this.state.weight }
        newDW={ this.state.dw}/>

        <Table1 items1={ this.state.items1 } 
        />
        
        <Info2 handleFormSubmit2={ this.handleFormSubmit2 } 
        handleInputChange2={ this.handleInputChange }
        newDate={ this.state.date }
        newMeal={ this.state.meal }
        newCalories={ this.state.calories }
        newDW={ this.state.dw}/>
        
        <Table2 items2={ this.state.items2 } 
        />

        {/*<Dashboard />*/}
      </div>
    );
  }
}

export default App;