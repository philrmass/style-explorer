import { SET_MAGNIFIER_POSITION, SET_FULL_SIZE } from '../constants/actionTypes';

export const defaultState = { x: 0, y: 0, width: 20, height: 10 };

function magnifier(state = defaultState, action) {
  switch(action.type) {
    case SET_MAGNIFIER_POSITION:
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      });
    case SET_FULL_SIZE:
      return Object.assign({}, state, {
        fullWidth: action.width,
        fullHeight: action.height
      });
    default:
      return state;
  }
}

export default magnifier;
