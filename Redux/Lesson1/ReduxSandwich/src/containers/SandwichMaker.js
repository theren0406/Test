import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrderButton from '../components/OrderButton';
import Sandwich from '../components/Sandwich';
import { addIngredient, deleteIngredient } from '../actions/ingredient';

class SandwichMaker extends Component {
  // state = {
  //   ingredients: [
  //     { id: 'tomato', name: '番茄', amount: 1, price: 12 },
  //     { id: 'egg', name: '蛋', amount: 1, price: 10 },
  //     { id: 'cucumber', name: '小黃瓜', amount: 1, price: 5 },
  //     { id: 'ham', name: '火腿', amount: 1, price: 15 },
  //   ],
  //   totalPrice: 42
  // }

  handleAddIngred = (ingredId) => {
    this.props.addIngredient(ingredId);

    // const newIngred = [...this.state.ingredients];
    // const ingred = newIngred.find(item => item.id === ingredId);
    // ingred.amount += 1

    // this.setState((state) => {
    //   return {
    //     ingredients: newIngred,
    //     totalPrice: state.totalPrice + ingred.price
    //   }
    // });
  }

  handleSubtractIngred = (ingredId) => {
    this.props.deleteIngredient(ingredId);

    // const newIngred = [...this.state.ingredients];
    // const ingred = newIngred.find(item => item.id === ingredId);

    // const price = this.state.totalPrice;

    // if (ingred.amount > 0) {
    //   ingred.amount -= 1
    //   this.setState({
    //     ingredients: newIngred,
    //     totalPrice: price - ingred.price
    //   });
    // }
  }

  handleCheckOut = () => {
    // const { ingredients, totalPrice } = this.state;
    // const queryParams = [];

    // ingredients.forEach((ingred) => {
    //   queryParams.push(`${ingred.id}=${JSON.stringify(ingred)}` )
    // });
    // queryParams.push('totalPrice=' + totalPrice);

    // const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout'
      // search: '?' + queryString
    });
  }

  render() {
    const { ingredients, totalPrice } = this.props;
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

const mapStateToProps = state => {
  return {
      ingredients: state.ingredients,
      totalPrice: state.totalPrice
  };
}

const mapDispatchToProps = dispatch => {
  // return bindActionCreators({ addIngredient, deleteIngredient }, dispatch);
  return {
      addIngredient: (payload) => dispatch(addIngredient(payload)),
      deleteIngredient: (payload) => dispatch(deleteIngredient(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SandwichMaker);