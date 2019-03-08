class Color {
  static hexToColor(hex) {
    return {
      hex: hex
    };
  }

  static hexToRgb(hex) {
    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4), 16),
    };
  }

  static rgbToHsv(red, green, blue) {
    return {
      red: red,
      green: green,
      blue: blue
    };
  }
}

export default Color;
