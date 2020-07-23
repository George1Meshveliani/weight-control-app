import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Password</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.password}</td>
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