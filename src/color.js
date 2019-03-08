class Color {
  static hexToColor(hex) {
    return {
      hex: hex
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
