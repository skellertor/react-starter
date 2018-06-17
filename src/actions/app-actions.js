import {
  SHOW_EXAMPLE,
  SET_CURRENT_PAGE
} from './action-types';

export const showExampleAction = () => ({
  type: SHOW_EXAMPLE
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload
});
