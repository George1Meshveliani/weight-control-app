import React, { Component } from 'react';



class Table2 extends React.Component {
  render() {
    
   
    const items2 = this.props.items2;
    return (
      <div id="Table2" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Meal:</th>
              <th>Calories:</th>
              </tr>
            {items2.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.meal}</td>
                  <td>{item.calories}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table2;