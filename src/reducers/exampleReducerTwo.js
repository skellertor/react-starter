import { SET_CURRENT_PAGE } from '../actions/action-types';

const initialState = {
  currentPage: null
};

export const exampleReducerTwo = (state = initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
