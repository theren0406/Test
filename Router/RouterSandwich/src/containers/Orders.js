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
        // 使用reverse 將最新訂單放最上面
        this.setState({ loading: false, orders: fetchedOrders.reverse() });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  handleDeleteOrder(orderInput) {
    const { orders } = this.state;
    const editedOrders = orders.filter(order => order.id !== orderInput.id);    

    axios.delete(`/orders/${orderInput.id}.json`)
      .then(res => {
        if (res) {
          alert('已刪除一筆購買紀錄');
          this.setState({ loading: false, orders: editedOrders });
        }
      })
      .catch(err => {
        alert('刪除失敗');
        this.setState({ loading: false });
      });
  }

  orderList() {
    const { orders } = this.state;
    return (
      orders.map((order) => (
        <div key={order.id} className="orderItem">
          <button className="close orderClose" onClick={() => this.handleDeleteOrder(order)}>
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
        {loading ?
          <Loading /> :
          this.orderList()
        }
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);