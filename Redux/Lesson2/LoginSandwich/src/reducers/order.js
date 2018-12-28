import { 
	GET_ORDER_LIST_REQUEST,
	GET_ORDER_LIST_SUCCESS,
	ADD_ORDER_REQUEST,
	ADD_ORDER_SUCCESS,
	DELETE_ORDER_REQUEST,
	DELETE_ORDER_SUCCESS
} 
from '../actions/actionTypes';

const initState = {
  orders: [],
  isLoading: true
}

const orderReducer = (state = initState, action) => {
	switch (action.type) {

		case GET_ORDER_LIST_REQUEST:
			return {
        ...state,
        isLoading: true
			};
		case GET_ORDER_LIST_SUCCESS:
			return {
        ...state,
        orders: [ ...action.payload ],
        isLoading: false
			};
		case ADD_ORDER_REQUEST:
			return {
        ...state,
        isLoading: true
			};
		case ADD_ORDER_SUCCESS:
			return {
        ...state,
        orders: [ ...state.orders, action.payload ],
        isLoading: false
			};
		case DELETE_ORDER_REQUEST:
			return {
        ...state,
        isLoading: true
			};
		case DELETE_ORDER_SUCCESS:
			return {
        ...state,
        orders: [ ...state.orders ].filter(order => order.id !== action.payload.id),
        isLoading: false
			};
		default:
			return state;
	}
};

export default orderReducer;