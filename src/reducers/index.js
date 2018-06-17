import { combineReducers } from 'redux';
import { exampleReducer } from './exampleReducer';
import { exampleReducerTwo } from './exampleReducerTwo';

export const rootReducer = combineReducers({
  exampleReducer,
  exampleReducerTwo
});
