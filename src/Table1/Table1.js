import React, { Component } from 'react';



class Table1 extends React.Component {
  render() {
    
    const desiredWeight = this.props.desiredWeight;
    const weightRecords = this.props.weightRecords;

    console.log("This is my props object:", this.props);
    
    return (
      <div id="Table1" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Weight:</th>
              </tr>
            {weightRecords.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td  style={{color: (+item.weight <= desiredWeight) ? 'green' : 'red'}} >{item.weight}</td>
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