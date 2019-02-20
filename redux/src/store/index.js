import {createStore, combineReducers} from 'redux';
import { mathReducer } from './math/reducer';
import { MINUS } from './math/constants';

const reducer = combineReducers({
    math: mathReducer
});

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {
    store
};