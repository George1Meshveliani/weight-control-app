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
      date: '',
      weight: '',

      meal: '',
      calories: '',

      items: [],
      items1: [],
      items2: [],
      user: {},
      weights: [],//weight list
      meals: [] //meal list
    }
  };

  handleRegFormSubmit = (form) => {
    console.log("-> SUBMITTED FORM: ", form);

    this.setState({
      user: form
    });

    //e.preventDefault();
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

    let content;
    if (!this.state.user.username) {
      content = <Form onFormSubmit={this.handleRegFormSubmit} />;
    } else {
      content = <div><button id="logout" type="submit" value="Submit1">Log out</button>

        <br></br>
        <Table userInfo={this.state.user} />

        <Info1 handleFormSubmit1={this.handleFormSubmit1}
          handleInputChange1={this.handleInputChange}
          newDate={this.state.date}
          newWeight={this.state.weight}
          newDW={this.state.dw} />

        <Table1 weightRecords={this.state.items1} desiredWeight={this.state.user.dw}
        />

        <Info2 handleFormSubmit2={this.handleFormSubmit2}
          handleInputChange2={this.handleInputChange}
          newDate={this.state.date}
          newMeal={this.state.meal}
          newCalories={this.state.calories}
          newDW={this.state.dw} />

        <Table2 items2={this.state.items2}/></div>;
    }

    return (
      <div className="App">
        <Headline />
        {content}

        {/*<Dashboard />*/}
      </div>
    );
  }
}

export default App;