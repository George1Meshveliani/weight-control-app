import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>DW</th>
              <th>DMC</th>
              <th>DAC</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
                  <td>{item.email}</td>
                  <td>{item.dw}</td>
                  <td>{item.dmc}</td>
                  <td>{item.dac}</td>
                  
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