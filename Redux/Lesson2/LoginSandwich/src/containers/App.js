import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Orders from './Orders';
import Checkout from './Checkout';
import Menu from '../components/Menu';
import SandwichMaker from './SandwichMaker';
import LocationRouter from '../hoc/LocationRouter';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <LocationRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route path="/menu" component={Menu} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/orders" component={Orders} />
              <Route path="/" exact component={SandwichMaker} />
            </Switch>
          </div>
        </LocationRouter>
      </BrowserRouter>
    );
  }
}

// export default App