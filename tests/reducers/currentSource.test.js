import { setSource } from '../../src/actions';
import currentSource from '../../src/reducers/currentSource';
import { defaultState } from '../../src/reducers/currentSource';

describe('currentSource', () => {
  test('Should return default state for undefined state', () => {
    expect(currentSource(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(currentSource(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should set source from url value', () => {
    expect(currentSource('', setSource('url0'))).toEqual('url0');
  });
});
