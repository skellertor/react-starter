import { SHOW_EXAMPLE } from '../actions/action-types';

const initialState = {
  showExample: false
};

export const exampleReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_EXAMPLE:
      return { ...state, showExample: !state.showExample };
    default:
      return state;
  }
};