import React, { Component } from 'react';

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
      // () => this.tick(),
      this.tick.bind(this),
      1000
    );
  }

  // 4. component將被移除
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  // 2.將component繪製到畫面上
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;