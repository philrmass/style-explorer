import rootReducer from '../../src/reducers/index';
import * as currentColor from '../../src/reducers/currentColor';
import * as magnifier from '../../src/reducers/magnifier';

describe('rootReducer', () => {
  const defaultState = { 
    currentColor: currentColor.defaultState,
    sources: {},
    currentSource: '',
    magnifier: magnifier.defaultState,
  };

  test('Should return default state for undefined state', () => {
    expect(rootReducer(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
});
