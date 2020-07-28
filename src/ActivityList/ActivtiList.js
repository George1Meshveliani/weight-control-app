import React, { Component } from 'react';



class ActivityList extends React.Component {
  render() {
    
   const desiredActivities = this.props.desiredActivities;
    const items3 = this.props.items3;
    let b = 1;
    if (this.props.newActivity === "Hiking") {
         b = 40;
    }

    if (this.props.newActivity === "Running") {
        b = 140;
    }

    if (this.props.newActivity === "Running") {
        b = 300;
    }
    return (
      <div id="ActivityList" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Activity Type:</th>
              <th>Burned Calories:</th>
              </tr>
            {items3.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  <td>{item.activityType}</td>
                  <td style = {{color: (+item.burnedCalories <= desiredActivities) ? 'red' : 'green'}} >
                      {+item.burnedCalories*b}</td>
                      
                </tr>
                
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivityList;