import React, { Component } from 'react';

import axios from '../axiosURL';
import Loading from '../components/Loading';
import withErrorHandler from '../hoc/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        // console.log(res);
        for (let key in res.data) {
          fetchedOrders.push({
            id: key,
            ...res.data[key]
          });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  handleDeleteOrder() {

  }

  orderList() {
    const { orders } = this.state;
    return (
      orders.map((order) => (
        <div key={order.id} className="orderItem">
          <button className="close orderClose" onClick={this.handleDeleteOrder}>
            <span>&times;</span>
          </button>
          <p>訂單編號 : <span>{order.id}</span><span className="orderTime">{order.time}</span></p>
          <p>內容 :
          {order.ingredients.map((ingred) => (
            ingred.amount > 0 &&
            <span key={ingred.id}>
              {ingred.name}({ingred.amount})
            </span>
            ))}
          </p>
          <p>總金額 : <span className="orderPrice">{order.totalPrice}</span> NTD</p>
        </div>
      ))
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="col-12">
        <div style={{ marginTop: '300px' }} />
        {loading ?
          <Loading /> :
          this.orderList()
        }
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);