import React, { Component } from 'react';

import OrderButton from '../components/OrderButton';
import OrderModal from '../components/OrderModal';
import Sandwich from '../components/Sandwich';
import axios from '../axiosURL';

export default class SandwichMaker extends Component {
  state = {
    ingredients: [
      { id: 'tomato', name: '番茄', amount: 1, price: 12 },
      { id: 'egg', name: '蛋', amount: 1, price: 10 },
      { id: 'cucumber', name: '小黃瓜', amount: 1, price: 5 },
      { id: 'ham', name: '火腿', amount: 1, price: 15 },
    ],
    totalPrice: 42,
    modalIsShowed: false,
    isLoading: false
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

  openOrderModal = () => {
    this.setState({ modalIsShowed: true });
  }

  closeOrderModal = () => {
    this.setState({ modalIsShowed: false });
  }

  handleSendOrder = () => {
    this.setState({ loading: true });
    const { ingredients, totalPrice } = this.state;

    const order = {
      ingredients,
      totalPrice,
      time: new Date().toLocaleString(),
      customer: {
        name: 'Cindy Chen',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Taiwan'
        },
        email: 'test@test.com'
      }
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ isLoading: false, modalIsShowed: false });
        if(response) alert('訂購成功');
      })
      .catch(error => {
        this.setState({ isLoading: false, modalIsShowed: false });
        alert('訂購失敗...')
      });
  }

  render() {
    const { ingredients, totalPrice, modalIsShowed, isLoading } = this.state;
    return (
      <div className="row">
        <div className="col-md-6">
          <Sandwich ingreds={ingredients} />
        </div>
        <div className="col-md-6">
          {ingredients.map((item) => (
            <OrderButton key={item.id}
              { ...item }
              addIngred={this.handleAddIngred}
              subtractIngred={this.handleSubtractIngred}
            />
          ))}
          <p className="totalPrice">總金額 : {totalPrice} NTD</p>
          <button className="myBtn confirmBtn orderBtn" onClick={this.openOrderModal}>購買</button>
        </div>
        <OrderModal { ...this.state }
          closeModal={this.closeOrderModal} sendOrder={this.handleSendOrder}
        />
      </div>
    );
  }
} 