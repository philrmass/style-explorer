//import { SET_COLOR } from '../constants/actionTypes';

export const defaultState = { magX: 0, magY: 0 };

function ui(state = defaultState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

/*
    case SET_COLOR:
      return action.color;
      */
export default ui;
