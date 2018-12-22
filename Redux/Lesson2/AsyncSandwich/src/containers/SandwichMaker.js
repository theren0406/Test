import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrderButton from '../components/OrderButton';
import Sandwich from '../components/Sandwich';
import { addIngredient, deleteIngredient } from '../actions/ingredient';

class SandwichMaker extends Component {

  handleAddIngred = (ingredId) => {
    this.props.addIngredient(ingredId);
  }

  handleSubtractIngred = (ingredId) => {
    this.props.deleteIngredient(ingredId);
  }

  handleCheckOut = () => {
    this.props.history.push('/checkout');
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