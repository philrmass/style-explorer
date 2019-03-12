import * as types from '../constants/actionTypes';

export const defaultState = { 
  fullWidth: 1,
  fullHeight: 1,
  displayWidth: 1,
  displayHeight: 1,
  x: 0, 
  y: 0, 
  width: 20, 
  height: 10,
  cursorX: 0,
  cursorY: 0, 
  cursorWidth: 1, 
  cursorHeight: 1
};

function magnifier(state = defaultState, action) {
  switch(action.type) {
    case types.SET_CURSOR_POSITION:
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
