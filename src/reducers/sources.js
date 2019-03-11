import { ADD_SOURCE } from '../constants/actionTypes';

function sources(state = {}, action) {
  switch(action.type) {
    case ADD_SOURCE:
      return Object.assign({}, state, {
        [action.id]: action.source
      });
    default:
      return state;
  }
}

export default sources;
