import { 
	LOCATION_INIT,
	LOCATION_CHANGE
} 
from '../actions/actionTypes';

const initState = {
  pathname: '',
  prevPathname: ''
}

const orderReducer = (state = initState, action) => {
	switch (action.type) {

		case LOCATION_INIT:
			return {
        ...state,
        pathname: action.payload.pathname,
			};
		case LOCATION_CHANGE:
			return {
        ...state,
        pathname: action.payload.pathname,
        prevPathname: state.pathname
			};
		default:
			return state;
	}
};

export default orderReducer;