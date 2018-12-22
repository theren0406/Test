import { 
	GET_ORDER_LIST_REQUEST,
	GET_ORDER_LIST_SUCCESS,
  GET_ORDER_LIST_FAILURE,
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

export const getOrderList = payload => (
  (dispatch) => {
    dispatch(getOrderListRequest(payload));
    axios.get('/orders.json')
      .then(response => {
        dispatch(getOrderListSuccess(response.data));
      })
      .catch(error => {
        dispatch(getOrderListFailure(error));
      });
  }
);
