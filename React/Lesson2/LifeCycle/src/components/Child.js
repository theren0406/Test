import React, { Component, PureComponent } from 'react';

export default class Child extends Component {

  shouldComponentUpdate(nextProps) {
    return nextProps.data.name !== this.props.data.name;
  }

  render() {
    console.log('child render');
    return (
      <p>{this.props.data.name}</p>
    );
  }
}