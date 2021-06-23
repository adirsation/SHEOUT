import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import purchaseReducer from './purchaseReducer';

export default combineReducers({
    productsReducer,
    purchaseReducer
});