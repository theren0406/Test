import React, { Component } from 'react';

import OrderButton from '../components/OrderButton';
import Sandwich from '../components/Sandwich';

export default class SandwichMaker extends Component {
  state = {
    ingredients: [
      { id: 'tomato', name: '番茄', amount: 1, price: 12 },
      { id: 'egg', name: '蛋', amount: 1, price: 10 },
      { id: 'cucumber', name: '小黃瓜', amount: 1, price: 5 },
      { id: 'ham', name: '火腿', amount: 1, price: 15 },
    ],
    totalPrice: 42
  }

  handleAddIngred = (ingredId) => {
    const newIngred = [...this.state.ingredients];
    const ingred = newIngred.find(item => item.id === ingredId);
    ingred.amount += 1

    this.setState((state) => {
      return {
        ingredients: newIngred,
        totalPrice: state.totalPrice + ingred.price
      }
    });
  }

  handleSubtractIngred = (ingredId) => {
    const newIngred = [...this.state.ingredients];
    const ingred = newIngred.find(item => item.id === ingredId);

    const price = this.state.totalPrice;

    if (ingred.amount > 0) {
      ingred.amount -= 1
      this.setState({
        ingredients: newIngred,
        totalPrice: price - ingred.price
      });
    }
  }

  handleCheckOut = () => {
    const { ingredients, totalPrice } = this.state;
    const queryParams = [];

    ingredients.forEach((ingred) => {
      queryParams.push(`${ingred.id}=${JSON.stringify(ingred)}` )
    });
    // for (let i in ingredients) {
    //   queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    // }
    queryParams.push('totalPrice=' + totalPrice);

    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <Sandwich ingreds={ingredients} />
        </div>
        <div className="col-md-6">
          <div className="orderDetail">
            {ingredients.map((item) => (
              <OrderButton key={item.id}
                {...item}
                addIngred={this.handleAddIngred}
                subtractIngred={this.handleSubtractIngred}
              />
            ))}
            <p className="totalPrice">總金額 : {totalPrice} NTD</p>
            <button className="myBtn confirmBtn" onClick={this.handleCheckOut}>購買</button>
          </div>
        </div>
      </div>
    );
  }
} 