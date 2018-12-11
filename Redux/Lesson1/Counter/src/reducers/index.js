import { combineReducers } from 'redux';
import UserReducer from './user';
import CounterReducer from './counter';

const rootReducer = combineReducers({
  data: CounterReducer,
  user: UserReducer
});

export default rootReducer;
