import { combineReducers } from 'redux';
import ingredientReducer from './ingredient';
import orderReducer from './order';

const rootReducer = combineReducers({
  ingred: ingredientReducer,
  order: orderReducer
});

export default rootReducer;