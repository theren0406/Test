import React, { Component, Fragment } from 'react';

export default class Input extends Component {
  state = {
    value: ''
  }

  // 雙向綁定可輕易對 input內容作控制

  handleInputChange = (e) => {
    this.setState({ value: e.target.value.toUpperCase()})
  }

  render() {
    return (
      <div>
        <label>Input :</label>
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        <p className="output">{this.state.value}</p>
      </div>
    );
  }
}