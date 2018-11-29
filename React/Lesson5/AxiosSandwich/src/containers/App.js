import React, { Component } from 'react';

import '../../style/style.css';
import Orders from './Orders';
import SandwichMaker from './SandwichMaker';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <SandwichMaker />
        <Orders />
      </div>
    );
  }
}

// export default App