import React, { Component } from 'react';
import { connect } from 'react-redux';

import OrderButton from '../components/OrderButton';
import Sandwich from '../components/Sandwich';
import { addIngredient, deleteIngredient, initIngredient } from '../actions/ingredient';

class SandwichMaker extends Component {

  componentDidMount() {
    this.props.initIngredient();
  }

  handleAddIngred = (ingredId) => {
    this.props.addIngredient(ingredId);
  }

  handleSubtractIngred = (ingredId) => {
    this.props.deleteIngredient(ingredId);
  }

  handleCheckOut = () => {
    const { history, totalPrice } = this.props;
    if (totalPrice > 0) {
      history.push('/checkout');
    } else {
      alert('請先選擇三明治的內餡喔~');
    }
  }

  render() {
    const { ingredients, totalPrice } = this.props;
    const btnClassName = totalPrice > 0 ? 'myBtn confirmBtn' : 'myBtn confirmBtn disableBtn';
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
            <button className={btnClassName} onClick={this.handleCheckOut}>購買</button>
          </div>
        </div>
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

const mapDispatchToProps = { 
  addIngredient: addIngredient, 
  deleteIngredient: deleteIngredient,
  initIngredient: initIngredient
};

export default connect(mapStateToProps, mapDispatchToProps)(SandwichMaker);