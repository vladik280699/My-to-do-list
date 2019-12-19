import {SET_VISIBILITY_FILTER} from './actions';
import {initialState} from './initial-state';

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter
      }
    default:
      return state;
  }
};