// Define action type
export const ADD_DATA = 'ADD_DATA';

// Action creator function
export const addData = (formData) => ({
  type: ADD_DATA,
  payload: formData
});
