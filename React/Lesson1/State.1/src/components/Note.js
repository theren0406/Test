import React, { Component } from 'react';

import Child from './Child';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      post: [],
      counter: 0
    };
  }

  // 使用setState 修改state object的值
  set() {
    // Wrong
    this.state.comment = 'Hello';
    // Correct
    this.setState({ comment: 'Hello' });
  }


  // 在多個地方會需要修改state時，setState可能為非同步
  // 修改state需要使用state or props的值時，請使用function 的參數修改值
  set() {
    // Wrong
    this.setState({
      counter: this.state.counter + 1,
    });
    // Correct
    this.setState(function (state, props) {
      return {
        counter: state.counter + 1
      };
    });
  }

  // React自動 merge state Object
  componentDidMount() {
      this.setState({
        posts: [123, 234]
      });

      this.setState({
        comments: 'response.comments'
      });
  }

  // state的值也可經由props傳至子元件
  render() {
    return (
      <div>
        {this.state.comment}
        <Child data={this.state.commment} />
      </div>
    );
  }
}

export default Note