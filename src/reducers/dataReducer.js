import { ADD_DATA } from '../actions/index';

const initialState = {
  dataList: []
};

const dataReducer = (state = initialState, action) => {
  console.log(action.payload)
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
