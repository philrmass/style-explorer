import { setSource } from '../../src/actions';
import currentSource from '../../src/reducers/currentSource';

describe('currentSource', () => {
  test('Should return default state for undefined state', () => {
    expect(currentSource(undefined, { type: null })).toEqual('');
  });

  test('Should return same state for undefined action', () => {
    expect(currentSource('', { type: null })).toEqual('');
  });

  test('Should set source from url value', () => {
    expect(currentSource('', setSource('url0'))).toEqual('url0');
  });
});
