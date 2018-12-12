import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/counter';
// import { addCounter, clearCounter } from '../actions/counter';


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleAddOne = () => {
    // this.setState(function(state){
    //   return { counter: state.counter + 1 }
    // })
    // 1. 使用 props的 dispatch方法
    // this.props.dispatch(actions.addCounter(1));

    // 2. mapDispatchToProps後，直接使用props內的方法
    this.props.addCounter(1);
  }

  handleClear = () => {
    // this.setState({
    //   counter: 0
    // })

    // this.props.dispatch(actions.clearCounter());
    this.props.clearCounter();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>Counter : {this.props.counter}</div>
        <button className="btn" onClick={this.handleAddOne}>Add 1</button>
        <button className="btn" onClick={this.handleClear}>All Clear</button>
      </div>
    );
  }
}

// 使用 mapStateToProps，將state 加入props
const mapStateToProps = state => {
  return {
      counter: state.counter
  };
};

// 使用 mapDispatchToProps，將dispatch 加入props
const mapDispatchToProps = dispatch => {
  // return {
  //     addOneCounter: (payload) => dispatch({ type: actions.addCounter, payload }),
  //     clearCounter: () => dispatch({ type: actions.clearCounter })
  // }
  return {
    addCounter: (payload) => dispatch(actions.addCounter(payload)),
    clearCounter: () => dispatch(actions.clearCounter())
  }
};


// 若只有mapDispatchToProps，第一個參數要帶null
// export default connect(null, mapDispatchToProps)(Counter);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);