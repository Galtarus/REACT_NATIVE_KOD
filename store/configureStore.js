import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
	cart: cartReducer,
});

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;