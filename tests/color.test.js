import Color from '../src/color';

describe('Color', () => {
  const hexValue = 'ff800a';
  const rgbValue = {
    red: 255,
    green: 128,
    blue: 10
  };

  test('should convert hex to rgb', () => {
    expect(Color.hexToRgb(hexValue)).toEqual(rgbValue);
  });
});
