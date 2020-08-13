import React, { Component } from 'react';
import './App.css';

///import UserInput from './UserInput/UserInput';
//import UserOutput from './UserOutput/UserOutput';*/}

import RegForm from './RegForm/RegForm';
import UserList from './UserList/UserList';
import Headline from './Headline/Headline';
import WeightInfo from './WeightInfo/WeighInfo';
import WeightList from './WeightList/WeightList';
import MealInfo from './MealInfo/MealInfo';
import MealList from './MealList/MealList';
import ActivityInfo from './ActivityInfo/ActivityInfo'
import ActivityList from './ActivityList/ActivtiList'

import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  constructor() {
    super();



    this.state = {
      currentPage: 'reg',

      date: '',
      weight: '',

      meal: '',
      calories: '',

      activityType: '',
      burnedCalories: '',

      dmc: '',
      dac: '',

      itemsForUserList: [],
      items1: [],
      items2: [],
      activityList: [],
      user: {},
      weights: [],//weight list
      meals: [] //meal list
    }
  };

  handleRegFormSubmit = (form) => {
    console.log("-> SUBMITTED FORM: ", form);

    this.setState({
      user: form
    });

    

    //e.preventDefault();
  };

  goToWeightListPage = () => {
    this.changePage("userdata");
  }

  goToMealListPage = () => {
    this.changePage("weightdata");
  }

  goToLastPage = () => {
    this.changePage("mealdata");
  }

  handleWeightInfoSubmit = (e) => {
    e.preventDefault();

    let items2= [...this.state.items2];

    items2.push({
      date: this.state.date,
      weight: this.state.weight,
      dw: this.state.dw,
    });

    this.setState({
      items2,
      weight: '',
      date: '',
      dw: ''
    });

    //this.changePage("weightdata");
  };

  

  

  handleMealInfoSubmit = (e) => {
    e.preventDefault();

    let itemsForMealList= [...this.state.itemsForMealList];

    itemsForMealList.push({
      date: this.state.date,
      meal: this.state.meal,
      calories: this.state.calories,

    });

    this.setState({
      itemsForMealList,
      date: '',
      meal: '',
      /* dw: '',
       dmc: '', */
    });
  };

  handleNewActivity = (newActivity) => {
    this.setState({
      activityList: [...this.state.activityList, newActivity]
    });

    this.changePage("activitydata");
  };

  changePage = (newPage) => {
    this.setState({
      currentPage: newPage
    });
  };

  // handleFormSubmit3 = (e) => {
  //   e.preventDefault();

  //   let items3 = [...this.state.items3];

  //   items3.push({
  //     date: this.state.date,
  //     activityType: this.state.activityType,
  //     burnedCalories: this.state.burnedCalories,

  //   });

  //   this.setState({
  //     items3,
  //     date: '',
  //     activityType: '',
  //     burnedCalories: '',
  //    /* meal: '',
  //     dw: '',
  //     dmc: '', */
  //   });
  // };



  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  /*removeItems = (p) => {
    var array = this.state.items;
    var index = array.indexOf(p.target.value); 
    delete array[index];
  };*/


  render() {

    // if (!this.state.user.username) return <Form onFormSubmit={this.handleRegFormSubmit} />;

    let content;
    if (this.state.currentPage === "reg") {
      content = <RegForm onFormSubmit={this.handleRegFormSubmit} 
      goToWeightListPage = {this.goToWeightListPage}/>;
    } else if (this.state.currentPage === "userdata") {
      content = <div> 
      <UserList userInfo={this.state.user} />

      <WeightInfo handleWeightInfoSubmit={this.handleWeightInfoSubmit}
      goToMealListPage = {this.goToMealListPage}
      handleWeightInputChange={this.handleInputChange}
      newDate={this.state.date}
      newWeight={this.state.weight}
      newDW={this.state.dw}
    /> 
    
      <WeightList weightRecords={this.state.items1}
          desiredWeight={this.state.user.dw}
        />

        
        
        
    </div>;
    } else if (this.state.currentPage === "weightdata") {
      content = <div> 

          <UserList userInfo={this.state.user} />

          <MealInfo handleMealInfoSubmit={this.handleMealInfoSubmit}
          handleMealInputChange={this.handleInputChange}
          goToLastPage = {this.goToLastPage}
          newDate={this.state.date}
          newMeal={this.state.meal}
          newCalories={this.state.calories}
        />

        <MealList items2={this.state.items2} desiredCalories={this.state.user.dmc} />

        
        
    </div>;
    } else if (this.state.currentPage === "mealtdata") {
      content = <div> 

        <UserList userInfo={this.state.user} />

        <MealList items2={this.state.items2} desiredCalories={this.state.user.dmc} />

        <ActivityInfo onNewActivity={this.handleNewActivity} />
        
        <ActivityList activities={this.state.activityList} userDac={this.state.user.dac} />

        
        
    </div>;
    } 
    else {
      content = <div>
        <UserList userInfo={this.state.user} />
        <ActivityInfo onNewActivity={this.handleNewActivity} />

<ActivityList activities={this.state.activityList} userDac={this.state.user.dac} />

<h3> Dashboard </h3>
<Dashboard weightRecords={this.state.items1}
  desiredWeight={this.state.user.dw}
  items2={this.state.items2}
  desiredCalories={this.state.user.dmc}
  items3={this.state.activityList}
  desiredActivities={this.state.user.dac} />

<button id="logout" type="button" value="Submit1" onClick={() => this.changePage("reg")}>Log out</button>

        
      </div>
    }
    return (
      <div className="App">
        {/*<Headline />*/}
        {/*regForm*/}

        {content}
      </div>
    );
  }
}

export default App;