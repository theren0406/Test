import { combineReducers } from 'redux';
import ingredientReducer from './ingredient';
import orderReducer from './order';
import routerReducer from './router';

const rootReducer = combineReducers({
  ingred: ingredientReducer,
  order: orderReducer,
  router: routerReducer
});

export default rootReducer;