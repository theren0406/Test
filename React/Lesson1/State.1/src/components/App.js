import React, { Component } from 'react';

import Clock from './Clock';
import Note from './Note';

export default class App extends Component {
  render() {
    return (
      <div>
        <Clock />
        <Note />
      </div>
    );
  }
}

// export default App