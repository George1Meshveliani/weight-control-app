import React, { Component } from 'react';

class Table1 extends React.Component {
  render() {
    const items1 = this.props.items1;
    return (
      <div id="Table1">
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
             
              <th>Weight:</th>
              
              
            </tr>
            {items1.map(item1 => {
              return (
                <tr>
                  <td>{item1.date}</td>
                  <td>{item1.weight}</td>
                  
                 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table1;