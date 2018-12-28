import { 
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	INIT_INGREDIENT_REQUEST,
	INIT_INGREDIENT_SUCCESS,
	INIT_INGREDIENT_FAILURE
} 
from './actionTypes';
import axios from '../axiosURL';

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

export const initIngredientRequest = payload => {
	return { type: INIT_INGREDIENT_REQUEST, payload };
}

export const initIngredientSuccess = payload => {
	return { type: INIT_INGREDIENT_SUCCESS, payload };
}

export const initIngredientFailure = payload => {
	return { type: INIT_INGREDIENT_FAILURE, payload };
}

export const initIngredient = payload => (
  (dispatch) => {
    dispatch(initIngredientRequest(payload));
    axios.get('/ingredients.json')
      .then(response => {
				const ingredients = [];
				for (let key in response.data) {
          ingredients.push({
            id: key,
            ...response.data[key]
          });
        }
        dispatch(initIngredientSuccess(ingredients));
      })
      .catch(error => {
        dispatch(initIngredientFailure(error));
      });
  }
);