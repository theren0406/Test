import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import Header from '../components/Header';
import Orders from './Orders';
import Checkout from './Checkout';
import Menu from '../components/Menu';
import SandwichMaker from './SandwichMaker';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" exact component={SandwichMaker} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App