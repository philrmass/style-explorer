import { SET_MAGNIFIER_POSITION } from '../constants/actionTypes';

export const defaultState = { x: 0, y: 0, width: 20, height: 10 };

function magnifier(state = defaultState, action) {
  switch(action.type) {
    case SET_MAGNIFIER_POSITION:
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      });
    default:
      return state;
  }
}

export default magnifier;
