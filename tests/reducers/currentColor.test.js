import { setColorHex } from '../../src/actions';
import currentColor from '../../src/reducers/currentColor';
import { defaultState } from '../../src/reducers/currentColor';

describe('currentColor', () => {
  const colorHex = '6b2097';
  const color = { 
    hex: colorHex,
    red: 107,
    green: 32,
    blue: 151,
    hue: 277.8,
    sat: 65.0,
    light: 35.9
  };

  test('Should return default state for undefined state', () => {
    expect(currentColor(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(currentColor(defaultState, { type: null })).toEqual(defaultState);
  });

  test('Should set color from hex value', () => {
    expect(currentColor({}, setColorHex(colorHex))).toEqual(color);
  });
});
