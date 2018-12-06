import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Loading from '../components/Loading';
import ContactData from './ContactData';

export default class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentDidMount() {
    // console.log(this.props);

    const query = new URLSearchParams(this.props.location.search);
    const ingredients = [];
    let price = 0;

    for (let param of query.entries()) {
      // console.log(param);
      if (param[0] === 'totalPrice') {
        price = param[1];
      } else {
        const ingred = JSON.parse(param[1]);
        ingredients.push(ingred);
      }
    }
    this.setState({ ingredients, totalPrice: price });
  }

  checkoutCancelled = () => {
    this.props.history.goBack();
  }

  checkoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <div className="checkout">
        <h5>三明治購買明細</h5>
        {ingredients &&
          <div>
            {ingredients.map((ingred) => (
              ingred.amount > 0 &&
              <p className="ingredName" key={ingred.id}>{ingred.name}
                <span> (${ingred.price}) </span>
                &nbsp; x {ingred.amount}
              </p>
            ))}
            <p className="totalPrice">總金額 : {totalPrice} NTD</p>
          </div>
        }
        <div className="btnContainer">
          <button className="myBtn" onClick={this.checkoutCancelled}>取消</button>
          <button className="myBtn confirmBtn" onClick={this.checkoutContinued}>確認</button>
        </div>
        <Route
          path={this.props.match.path + '/contact-data'}
          render={(props) => (<ContactData {...this.state} {...props} />)} />
      </div>
    );
  }
}