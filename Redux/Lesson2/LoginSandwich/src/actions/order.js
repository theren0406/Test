import {
  GET_ORDER_LIST_REQUEST,
  GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE
}
  from './actionTypes';
import axios from '../axiosURL';

export const getOrderListRequest = payload => {
  return { type: GET_ORDER_LIST_REQUEST, payload };
}

export const getOrderListSuccess = payload => {
  return { type: GET_ORDER_LIST_SUCCESS, payload };
}

export const getOrderListFailure = payload => {
  return { type: GET_ORDER_LIST_FAILURE, payload };
}

export const addOrderRequest = payload => {
  return { type: ADD_ORDER_REQUEST, payload };
}

export const addOrderSuccess = payload => {
  return { type: ADD_ORDER_SUCCESS, payload };
}

export const addOrderFailure = payload => {
  return { type: ADD_ORDER_FAILURE, payload };
}

export const deleteOrderRequest = payload => {
  return { type: DELETE_ORDER_REQUEST, payload };
}

export const deleteOrderSuccess = payload => {
  return { type: DELETE_ORDER_SUCCESS, payload };
}

export const deleteOrderFailure = payload => {
  return { type: DELETE_ORDER_FAILURE, payload };
}


export const getOrderList = payload => (
  (dispatch) => {
    dispatch(getOrderListRequest(payload));
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            id: key,
            ...res.data[key]
          });
        }
        dispatch(getOrderListSuccess(fetchedOrders.reverse()));
      })
      .catch(error => {
        dispatch(getOrderListFailure(error));
      });
  }
);

export const addOrder = (payload, history) => (
  (dispatch) => {
    dispatch(addOrderRequest(payload));
    axios.post('/orders.json', payload)
      .then(response => {
        dispatch(addOrderSuccess({ id: Date.now(), ...payload }));
        if (response) alert('訂購成功');
        // 轉至購買紀錄
        history.push('/orders');
      })
      .catch(error => {
        dispatch(addOrderFailure(error));
        alert('訂購失敗...');
      });
  }
);

export const deleteOrder = payload => (
  (dispatch) => {
    dispatch(deleteOrderRequest(payload));
    axios.delete(`/orders/${payload.id}.json`)
      .then(response => {
        dispatch(deleteOrderSuccess(payload));
      })
      .catch(error => {
        dispatch(deleteOrderFailure(error));
      });
  }
);