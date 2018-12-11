export const ADD_COUNTER = 'ADD_ONE_COUNTER';
export const CLEAR_COUNTER = 'CLEAR_COUNTER';

export const addCounter = payload => {
  return {
    type: ADD_COUNTER,
    payload
  }
}

export const clearCounter = payload => {
  return {
    type: CLEAR_COUNTER,
    payload
  }
}