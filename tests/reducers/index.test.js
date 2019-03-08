import rootReducer from '../../src/reducers/index';

describe('rootReducer', () => {
  const defaultState = { 
    currentColor: {}
  };

  test('Should return default state for undefined state', () => {
    expect(rootReducer(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(rootReducer(defaultState, { type: null })).toEqual(defaultState);
  });
});
