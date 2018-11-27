import React, { Component } from 'react';

import OldCustomInput from './OldCustomInput';

export default class OldRef extends Component {
  constructor(props) {
    super(props)

    this.inputElement = null;
  }
  render() {
    return (
      <OldCustomInput
        // 使用props 指到子元件的input
        inputRef={el => this.inputElement = el}
      />
    );
  }
}