import React, { Component } from 'react';

import '../../style/style.css';
import Header from './Header';
import SandwichMaker from './SandwichMaker';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Header /> */}
        <SandwichMaker />
      </div>
    );
  }
}

// export default App