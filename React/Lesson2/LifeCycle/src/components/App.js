import React, { Component } from 'react';

import Clock from './Clock';

export default class App extends Component {
  state = {
    clockIsShow: true
  }

  handleToggleClock = () => {
    this.setState({
      clockIsShow: !this.state.clockIsShow
    })
  }

  render() {
    return (
      <div>
        {this.state.clockIsShow &&
        <Clock />
        }
        <button onClick={this.handleToggleClock}>Toggle Clock</button>
        {/* < Note /> */}
      </div>
    );
  }
}