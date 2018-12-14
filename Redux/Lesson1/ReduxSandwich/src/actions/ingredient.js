export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export function addIngredient(payload) {
	return {
		type: ADD_INGREDIENT,
		payload
	};
}
export function deleteIngredient(payload) {
	return {
		type: REMOVE_INGREDIENT,
		payload
	};
}