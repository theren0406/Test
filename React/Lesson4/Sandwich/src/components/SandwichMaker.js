import React, { Component } from 'react';

import OrderButton from './OrderButton';

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
    const newIngred = [ ...this.state.ingredients ];
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
    const newIngred = [ ...this.state.ingredients ];
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

  render() {
    const { ingredients, totalPrice } = this.state;
    return (
      <div className="row">
        <ul className="col-md-6">
          <li className="bread food"></li>
          {
            ingredients.map((item) => {
              let ingreArray = [];
              for(let i = 0; i < item.amount; i++) {
                ingreArray.push(<li key={item.id + i} className={item.id + ' food'}></li>) 
              }
              return ingreArray;
              // 回傳二維陣列 ex: [[cheese], [ham, ham], [egg, egg], [cucumber]]
            })
            .reduce((arr, el) => {
              return arr.concat(el)
            }, [])
            // 使用reduce 將二維轉為一維陣列 ex: [cheese, ham, ham, egg, egg, cucumber]
          }
          <li className="bread food"></li>
        </ul>
        <div className="col-md-6">
          {ingredients.map((item) => (
            <OrderButton key={item.id} 
              { ...item }
              addIngred={this.handleAddIngred}
              subtractIngred={this.handleSubtractIngred} 
            />
          ))}
          <p className="totalPrice">總金額 : {totalPrice} NTD</p>
        </div>
      </div>
    );
  }
} 