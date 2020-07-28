import React, { Component } from 'react';



class MealList extends React.Component {
  render() {
    
   const desiredCalories = this.props.desiredCalories;
    const items2 = this.props.items2;
    return (
      <div id="MealList" >
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
                  <td style = {{color: (+item.calories <= desiredCalories) ? 'green' : 'red'}}>
                    {item.calories}</td>
                    
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MealList;