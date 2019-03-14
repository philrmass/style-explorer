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

  static hslToColor(hsl) {
    const rgb = this.hslToRgb(hsl);
    return {
      hex: this.rgbToHex(rgb),
      ...rgb,
      ...hsl
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

  static hslToRgb(hsl) {
    const h = hsl.hue / 60;
    const l = hsl.light / 100;
    const s = hsl.sat / 100;
    let d1 = 0;
    if(l <= 0.5) {
      d1 = l * (s + 1);
    } else {
      d1 = l + s - (l * s);
    }
    let d0 = l * 2 - d1;

    const red = Math.round(255 * this.hueToComponent(d0, d1, h + 2));
    const green = Math.round(255 * this.hueToComponent(d0, d1, h));
    const blue = Math.round(255 * this.hueToComponent(d0, d1, h - 2));

    return {
      red,
      green,
      blue
    };
  }

  static hueToComponent(d0, d1, h) {
    h = (h < 0 ? h + 6: h);
    h = (h >= 6 ? h - 6: h);
    if(h < 1) {
      return (((d1 - d0) * h) + d0);
    } else if(h < 3) {
      return d1;
    } else if(h < 4) {
      return ((d1 - d0) * (4 - h) + d0);
    } else {
      return d0;
    }
  }

  static parseColorData(pixels) {
    return this.combineColors(this.pixelsToColors(pixels));
  }

  static pixelsToColors(pixels) {
    return pixels.reduce((colors, component) => {
      let count = 4;
      let last = {};
      if(colors.length > 0) {
        last = colors[colors.length - 1];
        count = Object.keys(last).length;
      }
      if(count == 4) {
        colors.push({ red: component });
      } else if(count === 1) {
        last.green = component;
      } else if(count === 2) {
        last.blue = component;
      } else {
        last.hex = this.rgbToHex(last);
      }
      return colors;
    }, []);
  }

  static combineColors(colors) {
    return colors.reduce((combined, rgbh) => {
      let color = combined[rgbh.hex];
      if(color) {
        color.count += 1;
      } else {
        color = {
          ...this.rgbToHsl(rgbh),
          ...rgbh,
          count: 1
        };
      }
      combined[color.hex] = color;
      return combined;
    }, {});
  }
}

export default Color;
