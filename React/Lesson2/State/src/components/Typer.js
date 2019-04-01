import React, { Component } from 'react';


export default class App extends Component {
  // ES7 寫法
  state = {
    content: ''
  }

  press = (e) => {
    // e.persist();
    const input = e.target.value;
    console.log(e.target);
    this.setState(function(state) {
      console.log(e.target);
      return { content: state.content + input }
    })
  }

  render() {
    return (
      <div>
       <p>{this.state.content}</p>
       <button onClick={this.press} className="btn" value="W">W</button>
       <button onClick={this.press} className="btn" value="E">E</button>
       <button onClick={this.press} className="btn" value="N">N</button>
       <button onClick={this.press} className="btn" value="D">D</button>
       <button onClick={this.press} className="btn" value="Y">Y</button>
      </div>
    );
  }
}