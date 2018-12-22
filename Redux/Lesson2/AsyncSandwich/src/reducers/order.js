import { 
	GET_ORDER_LIST_REQUEST,
	GET_ORDER_LIST_SUCCESS
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
		default:
			return state;
	}
};

export default orderReducer;