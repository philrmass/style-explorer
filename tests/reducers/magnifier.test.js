import { setMagnifierPosition, setFullSize } from '../../src/actions';
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

  test('Should set full size from width and hight values', () => {
    expect(magnifier({}, setFullSize(1000, 800))).toEqual({ fullWidth: 1000, fullHeight: 800 });
  });
});
