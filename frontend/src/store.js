import { inventoryReducer } from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const store = createStore(inventoryReducer, applyMiddleware(thunk));

export default store;
