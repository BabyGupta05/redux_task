import { ADD_DATA } from '../actions';

const initialState = {
  dataList: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        dataList: [...state.dataList, action.payload]
      };
    default:
      return state;
  }
};

export default dataReducer;
