import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { LOCATION_INIT, LOCATION_CHANGE } from '../actions/actionTypes';

class InitRouter extends Component {

  componentDidMount() {
    this.props.initLocation(this.props.location);
  }
  
  componentDidUpdate(prevProps) {
    if (location !== prevProps.location) {
      this.props.changeLocation(this.props.location);
    }
  }

  render() {
    return this.props.children
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initLocation : (payload) => dispatch({ type: LOCATION_INIT, payload }),
    changeLocation: (payload) => dispatch({ type: LOCATION_CHANGE, payload })
  }
}

export default withRouter(connect(null, mapDispatchToProps)(InitRouter))