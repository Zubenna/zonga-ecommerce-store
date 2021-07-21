import { combineReducers } from 'redux';
import shopReducer from './Shopping/shopping-reducer';
import filterReducer from './Shopping/filterProduct';

const rootReducer = combineReducers({
    shop: shopReducer,
    filter: filterReducer,
});
  
export default rootReducer;
  