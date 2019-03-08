import Color from '../src/color';

describe('Color', () => {
  const hexValue = 'ff800a';
  const redValue = 255;
  const greenValue = 128;
  const blueValue = 10;
  const rgbValue = {
    red: redValue,
    green: greenValue,
    blue: blueValue
  };
  const colorValue = {
    hex: hexValue,
    red: redValue,
    green: greenValue,
    blue: blueValue
  };

  test('should convert hex to rgb', () => {
    expect(Color.hexToRgb(hexValue)).toEqual(rgbValue);
  });

  test('should convert hex to color', () => {
    expect(Color.hexToColor(hexValue)).toEqual(colorValue);
  });
});
