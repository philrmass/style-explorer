# Style Explorer Data

## Reducers and Actions
- currentColor
  - SET
- currentSource
  - SET
- sources
  - ADD
  - REMOVE
- ui
  - OPEN
  - CLOSE

## Data Slices
- currentColor
  - color
- currentSource
- sources
  - source (xN)
    - color w/ count (xN)
- ui
  - isOpen (xN)

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
