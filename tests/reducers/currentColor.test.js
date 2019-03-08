import currentColor from '../../src/reducers/currentColor';

describe('currentColor', () => {
  const defaultState = {};

  test('Should return default state for undefined state', () => {
    expect(currentColor(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(currentColor(defaultState, { type: null })).toEqual(defaultState);
  });
});
