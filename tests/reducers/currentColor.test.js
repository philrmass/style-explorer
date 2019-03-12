import { setColorHex, setColorRgb, setColorHsl } from '../../src/actions';
import currentColor from '../../src/reducers/currentColor';
import { defaultState } from '../../src/reducers/currentColor';

describe('currentColor', () => {
  const colorHex = '6b2097';
  const colorRed = 107;
  const colorGreen = 32;
  const colorBlue = 151;
  const colorHue = 277.8;
  const colorSat = 65.0;
  const colorLight = 35.9;
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

  test('Should set color from red, green, blue values', () => {
    expect(currentColor({}, setColorRgb(colorRed, colorGreen, colorBlue))).toEqual(color);
  });

  test('Should set color from hue, sat, light values', () => {
    expect(currentColor({}, setColorHsl(colorHue, colorSat, colorLight))).toEqual(color);
  });
});
