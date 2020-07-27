import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    if (!this.props.userInfo.username) return <h2>Please fill out the reg form!</h2>;
    
    const items = [this.props.userInfo];
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
             
              <th>Email</th>
              <th>DW</th>
              <th>DMC</th>
              <th>DAC</th>
              
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.username}</td>
                  
                  <td>{item.email}</td>
                  <td >{item.dw === undefined ? '' : item.dw + ' kg'}</td>
                  <td >{item.dmc === undefined ? '' : item.dmc + ' cs'}</td>
                  <td>{item.dac + 'cs'}</td> 
                  <button onClick={this.props.removeItems}>X</button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;