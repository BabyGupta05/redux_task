import { ADD_DATA } from '../actions';

// Initial state
const initialState = {
  dataList: []
};

// Reducer function
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        dataList: [...state.dataList, action.payload] // Add the new data to dataList array
      };
    default:
      return state;
  }
};

export default dataReducer;
