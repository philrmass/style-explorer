class Color {
  static hexToColor(hex) {
    const rgb = this.hexToRgb(hex);
    return {
      hex: hex,
      ...rgb
    };
  }

  static hexToRgb(hex) {
    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4), 16),
    };
  }

  static rgbToHsv(rgb) {
    return {
      hue: 0,
      sat: 0,
      value: 0 
    };
  }
}

export default Color;
