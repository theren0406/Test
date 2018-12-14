import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import ContactData from './ContactData';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   totalPrice: 0
  // }

  // componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search);
    // const ingredients = [];
    // let price = 0;
    // // console.log(query.get('totalPrice'));

    // for (let param of query) {
    //   // console.log(param);
    //   if (param[0] === 'totalPrice') {
    //     price = param[1];
    //   } else {
    //     const ingred = JSON.parse(param[1]);
    //     ingredients.push(ingred);
    //   }
    // }
    // this.setState({ ingredients, totalPrice: price });
  // }

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
          path={this.props.match.path + '/contact-data'}
          component={ContactData} />
         {/* render={(props) => (<ContactData {...this.state} {...props} />)} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      ingredients: state.ingredients,
      totalPrice: state.totalPrice
  };
}

export default connect(mapStateToProps)(Checkout);