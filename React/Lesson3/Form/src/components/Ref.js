import React, { Component } from 'react';

import CustomInput from './CustomInput';

// 請勿過常使用Ref，會難以掌控資料的內容

export default class Ref extends Component {
  constructor(props) {
    super(props);

    //ref 為class component，不可是function component
    this.inputComponent = React.createRef();

    //ref 為 input
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    console.log(this.inputComponent.current);
    this.inputComponent.current.focusTextInput();
  }

  // 使用current 抓取DOM屬性
  handleSubmit = (e) => {
    console.log(this.fileInput.current);
    e.preventDefault();
    if (this.fileInput.current.files) {
      alert(
        `Selected file - ${
          this.fileInput.current.files[0].name
        }`
      );
    }
  }

  // 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <p className="line"/>
        <CustomInput ref={this.inputComponent} />
      </form>
    );
  }
}