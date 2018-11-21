import React, { Component } from 'react';

import Child from './Child';

// props 資料從父源件來 不可修改
// state 資料在 class component裡 可作修改

class Clock extends Component {

  // 1.component初始化
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 3. component繪製完成
  componentDidMount() {
    this.timerID = setInterval(
      // function() { this.tick() },
      () => this.tick(),
      // this.tick.bind(this),
      1000
    );
    console.log('didMount');
  }

  componentDidUpdate() {
    console.log('updated');
  }

  // 4. component將被移除
  componentWillUnmount() {
    console.log('willUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 2.將component繪製到畫面上
  // state 或是 props 的值改變時，render method會重跑一次，重新繪製畫面
  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
        <Child data="123"/>
      </div>
    );
  }
}

export default Clock;