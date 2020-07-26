import React, { Component } from 'react';



class Table1 extends React.Component {
  render() {
    
    const desiredWeight = this.props.newDw;
    const items1 = this.props.items1;
    return (
      <div id="Table1" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Weight:</th>
              </tr>
            {items1.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td  style={{color: (item.weight <=  desiredWeight) ? 'green' : 'red'}} >{item.weight}</td>
                  <td>{desiredWeight}</td>
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