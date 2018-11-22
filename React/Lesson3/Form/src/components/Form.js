import React, { Component, Fragment } from 'react';

import UserList from './UserList';

export default class Form extends Component {
  state = {
    name: '',
    age: 0,
    users: [
      {
        name: 'Cindy',
        age: 18
      }
    ]
  }
  
  handleInputChange = (e) => {
    const type = e.target.type === 'text' ? 'name' : 'age';
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
    const { name, age } = this.state;
    const user = { name: name, age: parseInt(age) };

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name : 
            <input type="text" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <label>
            Age :   &ensp;
            <input type="number" value={this.state.age} onChange={this.handleInputChange} />
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
        <UserList list={this.state.users}/>
      </div>
    );
  }
}
