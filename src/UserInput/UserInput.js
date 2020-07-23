import React from 'react';
import './UserInput.css';
const userInput = (props) => {
    return (
    <div className = "UserInput">
    <h1> Write your User Name:</h1> 
    <input type="text"
    onChange={props.changed}
    value={props.currentName}
     />
    </div>
    )
  
}

export default userInput;