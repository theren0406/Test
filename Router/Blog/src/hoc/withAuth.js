import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = (Component) => {
  return class extends React.Component {
    
    componentDidMount() {
      console.log('withAuth didmount');
    }

    render() {
      return (
        1 < 5 ?
          <Component {...this.props} />
          : <Redirect to={{ pathname: '/newPost', state: { from: this.props.location } }} />
      );
    }
  }
};

export default withAuth;
