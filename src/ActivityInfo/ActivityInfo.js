import React, { Component } from 'react';

import './ActivityInfo.css';
class ActivityInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      activityType: "Hiking",
      distance: 0
    };
  }

  render() {
    return (
      <div id="RegForm">
        <h3>Create Your Activity History</h3>
        <form className="UserForm" onSubmit={(e) => {
          e.preventDefault();
          console.log("New activity added: ", this.state);
          this.props.onNewActivity(this.state);
        }}>

          <label className="label3" htmlFor="date">
            Date:
          <input id="date" value={this.state.date}
              type="date" name="date"
              onChange={(e) => this.setState({ date: e.target.value })} />
          </label>




          <label className="label3" htmlFor="activityType">
            Activity Type:
          <select id="activityType" value={this.state.activityType}
              type="text" name="activityType"
              onChange={(e) => this.setState({ activityType: e.target.value })}>
              <option value="Hiking">Hiking</option>
              <option value="Running">Running</option>
              <option value="Swimming">Swimming</option>
          </select>

          </label>

          <label className="label3" htmlFor="distance">
            Distance:
          <input id="distance" value={this.state.distance}
              type="number" name="distance"
              onChange={(e) => this.setState({ distance: e.target.value })} />
          </label>



          <button type="submit" value="Submit">Add</button>
          <br></br>

        </form>
      </div >
    );
  }
}

export default ActivityInfo;