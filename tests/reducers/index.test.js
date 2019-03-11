import rootReducer from '../../src/reducers/index';
import * as currentColor from '../../src/reducers/currentColor';
import * as ui from '../../src/reducers/ui';

describe('rootReducer', () => {
  const defaultState = { 
    currentColor: currentColor.defaultState,
    sources: {},
    currentSource: '',
    ui: ui.defaultState,
  };

  test('Should return default state for undefined state', () => {
    expect(rootReducer(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
});
