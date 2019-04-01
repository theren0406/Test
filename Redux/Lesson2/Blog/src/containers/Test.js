import React from 'react';
import withAuth from '../hoc/withAuth';

function Test() {
  if (1 < 5) {
    window.location.href = 'https://www.gomaji.com';
  }
  return <div>Hello</div>
}

export default withAuth(Test);