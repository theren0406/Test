import React, { Component, PureComponent } from 'react';

export default class Child extends PureComponent {

  // shouldComponentUpdate(nextProps) {
  //   return nextProps !== this.props;
  // }

  render() {
    console.log('child render');
    return (
      <p>{this.props.data}</p>
    );
  }
}