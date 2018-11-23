import React, { Component } from 'react';

import Child from './Child';

// http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
// react 生命週期圖表
class Clock extends Component {

  // 1. component初始化
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  // 3. component繪製完成，呼叫tick funciton裡的setState修改state的值 
  // componentDidMount 只會被呼叫一次
  componentDidMount() {
    this.timerID = setInterval(
      // function() { this.tick() },
      () => this.tick(),
      // this.tick.bind(this),
      1000
    );
    console.log('clock didMount');
  }  

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 5. 重新繪製畫面完成
  componentDidUpdate() {
    // console.log('clock updated');
  }

  // 6. component將被移除
  componentWillUnmount() {
    console.log('willUnmount');
    clearInterval(this.timerID);
  }


  // 2. 將component繪製到畫面上
  // 4. state 或是 props 的值改變時，render method會重跑一次，重新繪製畫面後
  render() {
    const { date } = this.state;
    console.log('clock render');
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