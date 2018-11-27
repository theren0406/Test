import React, { Component } from 'react';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
  }

  // 使用current 抓取DOM屬性
  focusTextInput = () => {
    this.textInput.current.focus();
    // console.log(this.textInput.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" defaultValue="Bob" ref={this.textInput} />
        <input
          type="button"
          value="Focus"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}