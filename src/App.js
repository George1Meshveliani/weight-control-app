import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: 'Sandro', age: 28},
      { name:'George', age: 24},
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
   // alert('Clicked!');
    //alert('Clicked!');
   //don't! this.state.persons[0].name ="Meshveliani";
   //this.setState({persons: })
   this.setState( { 
    persons: [
    { name: 'lado', age: 28 },
    { name: 'Sandro', age: 28},
    { name:'George Meshveliani', age: 24},
  ], 
} ) 
  }

  nameChangedHandler = (event) => {
    this.setState( { 
      persons: [
      { name: 'lado', age: 28 },
      { name: event.target.value, age: 28},
      { name:'George Meshveliani', age: 24},
    ], 
  } ) 
  }

  render() {
    const style = {
      backgroundColor: 'white',
      fonto: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>React Rocks!</p>
        <button
        style={style} 
        onClick={ () => this.switchNameHandler('Bakhva')}>Switch Name</button>
        <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
        <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click= {this.switchNameHandler.bind(this, 'Eduard')}
                changed={this.nameChangedHandler}
                > my hobbies: dancing</Person>
        <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
       </div>
    ); 
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi'));
  }
}
export default App;