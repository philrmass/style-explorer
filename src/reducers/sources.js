import { ADD_SOURCE, SET_SOURCE_COLORS } from '../constants/actionTypes';

export const defaultState = {};

function sources(state = defaultState, action) {
  let source;
  switch(action.type) {
    case ADD_SOURCE:
      return {
        ...state,
        [action.url]: {
          name: action.name,
          url: action.url,
          colors: {}
        }
      };
    case SET_SOURCE_COLORS:
      source = {
        ...state[action.url],
        colors: action.colors
      };
      return {
        ...state,
        [action.url]: source
      };
    default:
      return state;
  }
}

export default sources;
