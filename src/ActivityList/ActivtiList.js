import React, { Component } from 'react';



class ActivityList extends React.Component {
  render() {

    const userDac = this.props.userDac;

    let activities = this.props.activities.map(activity => {
      let coef = -1;
      if (activity.activityType === "Hiking") {
        coef = 40;
      } else if (activity.activityType === "Running") {
        coef = 140;
      } else if (activity.activityType === "Swimming") {
        coef = 300;
      }
      activity.burnedCalories = +activity.distance * coef;
      return (
        <tr>
          <td>{activity.date}</td>
          <td >{activity.activityType}</td>
          <td style={{ color: (+activity.burnedCalories <= userDac) ? 'red' : 'green' }}  >
            {+activity.burnedCalories}</td>
        </tr>
      );
    });

    return (
      <div id="ActivityList" >
        <table>
          <tbody>
            <tr>
              <th>Date:</th>
              <th>Activity Type:</th>
              <th>Burned Calories:</th>
            </tr>
            {activities}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActivityList;