import { SET_COLOR_HEX } from '../../src/constants/actionTypes';
import currentColor from '../../src/reducers/currentColor';

describe('currentColor', () => {
  const colorHex = 'ff8000';
  const defaultState = {};
  const colorSetState = { hex: colorHex };

  test('Should return default state for undefined state', () => {
    expect(currentColor(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(currentColor(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should set color from hex value', () => {
    expect(currentColor(defaultState, { type: SET_COLOR_HEX, hex: colorHex })).toEqual(colorSetState);
  });
});
