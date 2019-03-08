import Color from '../src/color';

describe('Color', () => {
  const hexValue = 'ffb52a';
  const redValue = 255;
  const greenValue = 181;
  const blueValue = 42;
  const hueValue = 39;
  const satValue = 100;
  const lightValue = 58;
  const rgbValue = {
    red: redValue,
    green: greenValue,
    blue: blueValue
  };
  const hslValue = {
    hue: hueValue,
    sat: satValue,
    light: lightValue
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

  test('should convert rgb to hsl', () => {
    expect(Color.rgbToHsl(rgbValue)).toEqual(hslValue);
  });

  test('should convert hex to color', () => {
    expect(Color.hexToColor(hexValue)).toEqual(colorValue);
  });
});
