// import * as actionTypes from '../actions/ingredient';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '../actions/ingredient';

const initState = {
	ingredients: [
		{ id: 'tomato', name: '番茄', amount: 1, price: 12 },
		{ id: 'egg', name: '蛋', amount: 1, price: 10 },
		{ id: 'cucumber', name: '小黃瓜', amount: 1, price: 5 },
		{ id: 'ham', name: '火腿', amount: 1, price: 15 },
	],
	totalPrice: 42,
};

const reducer = (state = initState, action) => {
	switch (action.type) {

		case ADD_INGREDIENT:
			const newIngred = [...state.ingredients];
    	const ingred = [...state.ingredients].find(item => item.id === action.payload);
			ingred.amount += 1			

			return {
				...state,
				ingredients: newIngred,
				totalPrice: state.totalPrice + ingred.price
			};

		case REMOVE_INGREDIENT:
			const removedIngred = [...state.ingredients];
			const ingre = [...state.ingredients].find(item => item.id === action.payload);
			ingre.amount -= 1		

			return {
				...state,
				ingredients: removedIngred,
				totalPrice: state.totalPrice - ingre.price
			};

		default:
			return state;
	}
};

export default reducer;