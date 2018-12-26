import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router';
import history from '../history'

import Blog from './Blog';
import ScrollToTop from '../hoc/ScrollToTop';

class App extends Component {
  render () {
    return (
      // <BrowserRouter basename="/my-app">
      <Router history={history}>
        <ScrollToTop>
          <Blog />
        </ScrollToTop>
      </Router>
      // </BrowserRouter>
    );
  }
}

export default App;
