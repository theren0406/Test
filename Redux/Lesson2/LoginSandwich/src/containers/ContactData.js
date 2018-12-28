import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../axiosURL';
import Input from '../components/Input';
import Loading from '../components/Loading';
import withErrorHandler from '../hoc/withErrorHandler';
import { addOrder } from '../actions/order';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    street: '',
    zipCode: '',
    isLoading: false
  }

  componentDidMount() {
    const { ingredients, history } = this.props;
    if (ingredients.length <= 0) {
      history.replace('/');
    }
  }

  handleInputChange = (e, input) => {
		this.setState({ [input]: e.target.value });
	}

  handleSendOrder = (e) => {
    e.preventDefault();
    // this.setState({ isLoading: true });
    const { name, email, street, zipCode } = this.state;
    const { ingredients, totalPrice, history } = this.props;

    const order = {
      ingredients,
      totalPrice,
      time: new Date().toLocaleString(),
      customer: {
        name,
        email,
        address: {
          street,
          zipCode,
          country: 'Taiwan'
        }
      }
    }
    this.props.addOrder(order, history);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className="contact">
        <h5>請輸入聯絡資料</h5>
        {isLoading ?
          <Loading /> :
          <form>
            <Input label="姓名" type="text" onChange={(e) => this.handleInputChange(e, 'name')} />
            <Input label="電子信箱" type="email" onChange={(e) => this.handleInputChange(e, 'email')} />
            <Input label="地址" type="text" onChange={(e) => this.handleInputChange(e, 'street')} />
            <Input label="郵遞區號" type="text" onChange={(e) => this.handleInputChange(e, 'zipCode')} />
            <button className="myBtn confirmBtn sendBtn" onClick={this.handleSendOrder}>送出</button>
          </form>
        }
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
  addOrder: addOrder
}

// export default withErrorHandler(ContactData, axios);
export default withErrorHandler(connect(mapStateToProps, mapDispatchToProps)(ContactData), axios);