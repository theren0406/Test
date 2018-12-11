const redux = require('redux');
const createStore = redux.createStore;

const initState = {
	counter: 0
}

// Reducer
const rootReducer = (state = initState, action) => {
	if (action.type === 'ADD_ONE_COUNTER') {
		return {
			...state,
			counter: state.counter + 1
		};
	}
	if (action.type === 'ADD_COUNTER') {
		return {
			...state,
			counter: state.counter + action.value
		};
	}
	return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscribe
store.subscribe(() => {
	console.log('[Subscription]', store.getState());
});

// Dispatching Action
store.dispatch({ type: 'ADD_ONE_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 5 });
console.log(store.getState());
