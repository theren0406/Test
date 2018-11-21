import React, { Component } from 'react';

export default class Child extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.data !== this.props.data;
  }

  render() {
    console.log('child render');
    return (
      <p>{this.props.data}</p>
    );
  }
}