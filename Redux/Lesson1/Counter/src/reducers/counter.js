import { ADD_COUNTER, CLEAR_COUNTER } from '../actions/counter';

const initState = {
  counter: 0
};

// action = { type: ADD_ONE_COUNTER, payload: 5 }
const counterReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case CLEAR_COUNTER:
      return {
        counter: 0
      };
    default:
      return state;
  }
};

export default counterReducer;
