import React from 'react';

const inputStyle = {
    border: '2px solid red'
};
const userInput = (props) => {
    return <input type="text" 
    style={inputStyle}
    onChange={props.changed} 
    value={props.currentName}/>
}

export default userInput;