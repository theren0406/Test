import { combineReducers } from 'redux';
import UserReducer from './user';

const rootReducer = combineReducers({
  user: UserReducer
  // product: produceReducer
});

export default rootReducer;
