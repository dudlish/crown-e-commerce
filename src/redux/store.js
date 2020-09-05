// Store holds the state of the app
// Middleware logs out actions that will be fired & what the state of those reduces before and after action

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middleWears = [logger];
const store = createStore(rootReducer, applyMiddleware(...middleWears));

export default store;