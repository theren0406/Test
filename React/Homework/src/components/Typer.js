import React, { Component, Fragment } from 'react';

import Button from './Button';

export default class Typer extends Component {
  state = {
    print: ''
  }

  handleTypeInput = (e) => {
    const input = e.target.innerHTML;
    this.setState((state) => {
      return { 
        print: state.print + input
      }
    })
  }

  render() {
    return (
      <div>
        <Button content="A" click={this.handleTypeInput}/>
        <Button content="P" click={this.handleTypeInput} />
        <Button content="L" click={this.handleTypeInput} />
        <Button content="E" click={this.handleTypeInput} />
        <p className="output">{this.state.print}</p>
      </div>
    );
  }
}