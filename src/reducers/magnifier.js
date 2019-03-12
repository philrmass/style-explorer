import * as types from '../constants/actionTypes';

export const defaultState = { 
  fullWidth: 1,
  fullHeight: 1,
  displayWidth: 1,
  displayHeight: 1,
  x: 0, 
  y: 0, 
  width: 30, 
  height: 20,
  cursorX: 0,
  cursorY: 0, 
  cursorWidth: 1, 
  cursorHeight: 1
};

function getPosition(cursorX, cursorY, state) {
  const xRatio = state.fullWidth / state.displayWidth;
  const yRatio = state.fullHeight / state.displayHeight;
  let x = Math.round((xRatio * cursorX) - (state.width / 2));
  let y = Math.round((yRatio * cursorY) - (state.height / 2));
  x = (x < 0 ? 0 : x);
  y = (y < 0 ? 0 : y);
  x = (x >= (state.fullWidth - state.width) ? (state.fullWidth - state.width - 1) : x);
  y = (y >= (state.fullHeight - state.height) ? (state.fullHeight - state.height - 1) : y);
  return [x, y];
}

function getCursor(state) {
  const xRatio = state.fullWidth / state.displayWidth;
  const yRatio = state.fullHeight / state.displayHeight;
  const cursorX = state.x / xRatio;
  const cursorY = state.y / yRatio;
  const cursorWidth = state.width / xRatio;
  const cursorHeight = state.height / yRatio;
  return [cursorX, cursorY, cursorWidth, cursorHeight];
}

function magnifier(state = defaultState, action) {
  let x, y, cx, cy, cw, ch;
  switch(action.type) {
    case types.SET_CURSOR_POSITION:
      [x, y] = getPosition(action.cursorX, action.cursorY, state);
      state = Object.assign(state, { x, y });
      [cx, cy, cw, ch] = getCursor(state);
      return Object.assign({}, state, {
        x,
        y,
        cursorX: cx,
        cursorY: cy,
        cursorWidth: cw,
        cursorHeight: ch
      });
    case types.SET_FULL_SIZE:
      //??? set, then update cursor
      return Object.assign({}, state, {
        fullWidth: action.width,
        fullHeight: action.height
      });
    case types.SET_DISPLAY_SIZE:
      //??? set, then update cursor
      return Object.assign({}, state, {
        displayWidth: action.width,
        displayHeight: action.height
      });
    default:
      return state;
  }
}

export default magnifier;
