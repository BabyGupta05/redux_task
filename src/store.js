
import { createStore, combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';

const rootReducer = combineReducers({
  dataReducer 
});

const store = createStore(rootReducer);

export default store;
