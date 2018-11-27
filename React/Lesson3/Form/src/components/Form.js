import React, { Component, Fragment } from 'react';

import UserList from './UserList';

export default class Form extends Component {
  state = {
    name: '',
    age: 0,
    gender: '',
    users: [
      {
        name: 'Cindy',
        age: 18,
        gender: 'female'
      }
    ]
  }
  
  handleInputChange = (e) => {
    let type = '';
    switch(e.target.type) {
      case 'text':
        type = 'name'
        break;
      case 'number':
        type = 'age'
        break;
      case 'radio':
        type = 'gender'
        break;
      default: 
        break;
    }
    this.setState({
      [type]: e.target.value
    });
  }

  // handleNameChange = (e) => {
  //   this.setState({ name: e.target.value });
  // }

  // handleAgeChange = (e) => {
  //   this.setState({ age: e.target.value });
  // }

  handleSubmit = (e) => {
    const { name, age, gender } = this.state;
    const user = { name, age: parseInt(age), gender };

    // 不可直接修改 state
    // wrong!!
    // this.state.users.push(user)

    // concat 參數為array
    // this.setState({ 
    //   users: this.state.users.concat([user])
    // })
    // // In ES6 you can use the Spread Operator
    this.setState({
      users: [ ...this.state.users, user ]
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form className="sampleForm" onSubmit={this.handleSubmit}>
          <label>
            Name : 
            <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Age :   &ensp;
            <input type="number" value={this.state.age} onChange={this.handleInputChange} />
          </label>
          <label>
            Gender :
            <input type="radio" value="male" name="gender" 
              onChange={this.handleInputChange} /> Male
            <input type="radio" value="female" name="gender"
              onChange={this.handleInputChange} /> Female
          </label>
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
        <UserList list={this.state.users}/>
      </div>
    );
  }
}
