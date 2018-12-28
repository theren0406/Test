// import * as actionTypes from '../actions/ingredient';
import { 
	ADD_INGREDIENT, 
	REMOVE_INGREDIENT, 
	INIT_INGREDIENT_REQUEST,
	INIT_INGREDIENT_SUCCESS
} 
from '../actions/actionTypes';

const initState = {
	ingredients: [],
	totalPrice: 0,
	isLoading: true
};

const ingredientReducer = (state = initState, action) => {
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
			
			if (state.totalPrice > 0) {
				return {
					...state,
					ingredients: removedIngred,
					totalPrice: state.totalPrice - ingre.price
				};
			} else {
				return state;
			}
		
		case INIT_INGREDIENT_REQUEST:
			return {
				...state,
				isLoading: true
			};
		
		case INIT_INGREDIENT_SUCCESS:
			return {
				...state,
				ingredients: [ ...action.payload ],
				isLoading: false
			};
			
		default:
			return state;
	}
};

export default ingredientReducer;