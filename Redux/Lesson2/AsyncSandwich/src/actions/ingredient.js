export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const addIngredient = payload => {
	return {
		type: ADD_INGREDIENT,
		payload
	};
}
export const deleteIngredient = payload => {
	return {
		type: REMOVE_INGREDIENT,
		payload
	};
}