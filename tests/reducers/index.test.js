import rootReducer from '../../src/reducers/index';
import { defaultState } from '../../src/reducers/index';

describe('rootReducer', () => {
  test('Should return default state for undefined state', () => {
    expect(rootReducer(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
});
