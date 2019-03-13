import * as types from '../constants/actionTypes';

export const defaultState = {
  colorPickerIsOpen: true,
  sourceIsOpen: true,
  sourcesIsOpen: true,
  graphIsOpen: true
};

function ui(state = defaultState, action) {
  switch(action.type) {
    case types.TOGGLE_COLOR_PICKER:
      return {
        ...state,
        colorPickerIsOpen: !state.colorPickerIsOpen
      };
    case types.TOGGLE_SOURCE:
      return {
        ...state,
        sourceIsOpen: !state.sourceIsOpen
      };
    case types.TOGGLE_SOURCES:
      return {
        ...state,
        sourcesIsOpen: !state.sourcesIsOpen
      };
    case types.TOGGLE_GRAPH:
      return {
        ...state,
        graphIsOpen: !state.graphIsOpen
      };
    default:
      return state;
  }
}

export default ui;
