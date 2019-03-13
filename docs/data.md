# Style Explorer Data

## Reducers and Actions
#### currentColor
* setColorHex(hex)
* setColorRgb(red, green, blue)
* setColorHsl(hue, sat, light)
#### sources
* addSource(name, url, imageData)
#### currentSource
* setSource(url)
#### magnifier
* setCursorPosition(x, y)
* setFullSize(width, height)
* setDisplaySize(width, height)
#### ui
* toggleColorPicker()
* toggleSource()
* toggleSources()
* toggleGraph()

## Data Types
- color
```json
{
  hex: "ff8000"
  red: 1.0
  green: 0.5
  blue: 0.0
  hue: 0.15
  sat: 1.0
  value: 0.5
}
```
