class Color {
  static hexToColor(hex) {
    const rgb = this.hexToRgb(hex);
    return {
      hex: hex,
      ...rgb,
      ...this.rgbToHsl(rgb)
    };
  }

  static rgbToColor(rgb) {
    return {
      hex: this.rgbToHex(rgb),
      ...rgb,
      ...this.rgbToHsl(rgb)
    };
  }

  static hexToRgb(hex) {
    return {
      red: parseInt(hex.slice(0, 2), 16),
      green: parseInt(hex.slice(2, 4), 16),
      blue: parseInt(hex.slice(4), 16),
    };
  }

  static rgbToHex(rgb) {
    const r = ('0' + rgb.red.toString(16)).slice(-2);
    const g = ('0' + rgb.green.toString(16)).slice(-2);
    const b = ('0' + rgb.blue.toString(16)).slice(-2);
    return r + g + b;
  }

  static rgbToHsl(rgb) {
    const r = rgb.red / 255;
    const g = rgb.green / 255;
    const b = rgb.blue / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const range = max - min;

    let hue = 0;
    if(r == max) {
      hue = ((g - b) / range);
    } else if(g === max) {
      hue = 2 + ((b - r) / range);
    } else {
      hue = 4 + ((r - g) / range);
    }
    hue = isNaN(hue) ? 0 : this.toDegrees(hue);
    if(hue < 0) {
      hue += 360;
    }
    const light = this.toPercent((min + max) / 2);
    let sat = 0;
    if(max > min) {
      if(light < 50) {
        sat = this.toPercent(range / (max + min));
      } else {
        sat = this.toPercent(range / (2 - max - min));
      }
    }

    return {
      hue,
      sat,
      light
    };
  }

  static toDegrees(value) {
    return Math.round(600 * value) / 10;
  }

  static toPercent(value) {
    return Math.round(1000 * value) / 10;
  }
}

export default Color;
