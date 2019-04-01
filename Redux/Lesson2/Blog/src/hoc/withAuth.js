import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  return class extends React.Component {
    
    componentDidMount() {
      console.log('withAuth didMount');
    }
    componentDidUpdate() {
      console.log('withAuth didUpdate');
    }

    render() {
      return (
        1 < 0 ?
          <Component {...this.props} />
          : <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />
      );
    }
  }
};

export default withAuth;
