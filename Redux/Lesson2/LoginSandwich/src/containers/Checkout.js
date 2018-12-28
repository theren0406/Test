import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import ContactData from './ContactData';

class Checkout extends Component {

  checkoutCancelled = () => {
    this.props.history.goBack();
  }

  checkoutContinued = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    const { ingredients, totalPrice } = this.props;
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
          path={this.props.match.path + '/contact-data'} component={ContactData} />
         {/* render={(props) => (<ContactData {...this.state} {...props} />)} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { ingred } = state;
  return {
      ingredients: ingred.ingredients,
      totalPrice: ingred.totalPrice
  };
}

export default connect(mapStateToProps)(Checkout);