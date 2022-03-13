import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

const middleware = process.env.NODE_ENV === 'prod' ? [thunk] : [thunk, createLogger()];
const enhancer =
  process.env.NODE_ENV === 'prod'
    ? compose(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}

export default configureStore;
