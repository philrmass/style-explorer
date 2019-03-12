import * as types from '../constants/actionTypes';

export const defaultState = { x: 0, y: 0, width: 20, height: 10 };

function magnifier(state = defaultState, action) {
  switch(action.type) {
    case types.SET_MAGNIFIER_POSITION:
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      });
    case types.SET_FULL_SIZE:
      return Object.assign({}, state, {
        fullWidth: action.width,
        fullHeight: action.height
      });
    case types.SET_DISPLAY_SIZE:
      return Object.assign({}, state, {
        displayWidth: action.width,
        displayHeight: action.height
      });
    default:
      return state;
  }
}

export default magnifier;
