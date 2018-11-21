import React, { Component, Fragment } from 'react';

import Button from './Button';

// props 資料從父源件來 不可修改
// state 資料在 class component裡 可作修改

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // state 必須初始化
    this.state = {
      counter: 0
    }
    
    // 1. bind in constructor or element
    this.handleAddOne = this.handleAddOne.bind(this);
  }

  handleAddOne() {
    this.setState(function(state){
      return { counter: state.counter + 1 }
    })
  }

  // 2. 使用ES6 arrow function (babel 7 需安裝@babel/plugin-proposal-class-properties 的plugin)
  handleClear = () => {
    this.setState({
      counter: 0
    })
  }

  render() {
    return (
      <div>
        <div>Counter : {this.state.counter}</div>
        {/* 3. 使用匿名函式return function */}
        <button className="btn" onClick={this.handleAddOne}>Add 1</button>
        <button className="btn" onClick={this.handleClear}>All Clear</button>
      </div>
    );
  }
}