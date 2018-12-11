import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducer from './reducers/counter';
// import rootReducer from './reducers/index';


const store = createStore(reducer);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.querySelector('#root'));
