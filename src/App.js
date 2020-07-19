import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';




  const app = (props) => {
    const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: 'Sandro', age: 28},
      { name:'George', age: 24}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //alert('Clicked!');
   //don't! this.state.persons[0].name ="Meshveliani";
   //this.setState({persons: })
   setPersonsState ( { 
    persons: [
    { name: "Max", age: 28 },
    { name: 'Sandro', age: 28},
    { name:'George Meshveliani', age: 24}
  ] 
} ); 
  
  
  };

  
 
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>React Rocks!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        />
        <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age}>
          my hobbies: dancing
          </Person>
        <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
       </div>
    ); 
 }
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hi'));
  
  

export default app;
