import { ADD_SOURCE } from '../constants/actionTypes';

export const defaultState = {};

function sources(state = defaultState, action) {
  switch(action.type) {
    case ADD_SOURCE:
      return {
        ...state,
        [action.id]: action.source
      };
    default:
      return state;
  }
}

export default sources;
