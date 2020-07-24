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
                  <td>{item.dw + ' kg'}</td>
                  <td>{item.dmc + ' cs'}</td>
                  <td>{item.dac + 'cs'}</td>
                  
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