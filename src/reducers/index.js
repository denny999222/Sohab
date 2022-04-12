import {combineReducers} from 'redux';
import {UserReducer} from './UserReducer';

import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers({
  User: UserReducer,
});

const store = createStore(reducers, applyMiddleware(...[ReduxThunk]));
export default store;
