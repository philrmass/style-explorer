import { setMagnifierPosition } from '../../src/actions';
import magnifier from '../../src/reducers/magnifier';
import { defaultState } from '../../src/reducers/magnifier';

describe('magnifier', () => {
  test('Should return default state for undefined state', () => {
    expect(magnifier(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(magnifier(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should set magnifier position from x and y values', () => {
    expect(magnifier({}, setMagnifierPosition(100, 100))).toEqual({ x: 100, y: 100 });
  });
});
