import React, { Component } from 'react';



class Dashboard extends React.Component {
  render() {
    const desiredWeight = this.props.desiredWeight;
    const weightRecords = this.props.weightRecords;
   const desiredCalories = this.props.desiredCalories;
    const items2 = this.props.items2;
    return (
      <div id="MealList" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Meal:</th>
              <th>Activity:</th>
              </tr>
            {items2.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.meal}</td>
                  <td style = {{color: (+item.calories <= desiredCalories) ? 'green' : 'red'}}>
                    {item.calories}</td>
                    
                </tr>
              );
            })}

          </tbody>
          <div id="WeightList" >
        <table>
          <tbody>
            <tr>
              <th>Weight:</th>
              </tr>
            {weightRecords.map(item => {
              return (
                <tr>
                  <td  style={{color: (+item.weight <= desiredWeight) ? 'green' : 'red'}} >{item.weight}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        </table>
      </div>
    );
  }
}

export default Dashboard;