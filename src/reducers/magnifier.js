import { SET_MAGNIFIER_POSITION } from '../constants/actionTypes';

export const defaultState = { magX: 0, magY: 0 };

function magnifier(state = defaultState, action) {
  switch(action.type) {
    case SET_MAGNIFIER_POSITION:
      return Object.assign({}, state, {
        magX: action.x,
        magY: action.y
      });
    default:
      return state;
  }
}

export default magnifier;
