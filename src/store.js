import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';
import { DevTools } from './DevTools';

let middleware = [thunk];
let enhancer = null;
if (process.env.NODE_ENV !== 'prod') {
  middleware = [ ...middleware, createLogger()];
  enhancer = compose(applyMiddleware(...middleware), DevTools.instrument());
} else {
  enhancer = compose(applyMiddleware(...middleware));
}

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default configureStore;
