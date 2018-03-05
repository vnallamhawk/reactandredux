import {combineReducers} from 'redux';
import fetchItems from './item/index';

const rootReducer = combineReducers({
    items : fetchItems
});

export default rootReducer;