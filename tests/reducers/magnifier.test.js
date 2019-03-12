import { setMagnifierPosition, setFullSize, setDisplaySize } from '../../src/actions';
import magnifier from '../../src/reducers/magnifier';
import { defaultState } from '../../src/reducers/magnifier';

describe('magnifier', () => {
  test('Should return default state for undefined state', () => {
    expect(magnifier(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(magnifier(defaultState, { type: null })).toEqual(defaultState);
  });

  const beforePosition = {
    fullWidth: 1000,
    fullHeight: 800,
    displayWidth: 100,
    displayHeight: 80,
    x: 0, 
    y: 0, 
    width: 20, 
    height: 10,
    cursorX: 15,
    cursorY: 25, 
    cursorWidth: 2, 
    cursorHeight: 1
  };

  const beforeFull= {
    fullWidth: 1,
    fullHeight: 1,
    displayWidth: 100,
    displayHeight: 80,
    x: 150, 
    y: 250, 
    width: 20, 
    height: 10,
    cursorX: 15,
    cursorY: 25, 
    cursorWidth: 2, 
    cursorHeight: 1
  };

  const beforeDisplay = {
    fullWidth: 1000,
    fullHeight: 800,
    displayWidth: 1,
    displayHeight: 1,
    x: 150, 
    y: 250, 
    width: 20, 
    height: 10,
    cursorX: 15,
    cursorY: 25, 
    cursorWidth: 2, 
    cursorHeight: 1
  };

  const after = {
    fullWidth: 1000,
    fullHeight: 800,
    displayWidth: 100,
    displayHeight: 80,
    x: 150, 
    y: 250, 
    width: 20, 
    height: 10,
    cursorX: 15,
    cursorY: 25, 
    cursorWidth: 2, 
    cursorHeight: 1
  };

  test('Should set magnifier position from x and y values', () => {
    expect(magnifier(beforePosition, setMagnifierPosition(150, 250))).toEqual(after);
  });

  test('Should set full size from width and height values', () => {
    expect(magnifier(beforeFull, setFullSize(1000, 800))).toEqual(after);
  });

  test('Should set display size from width and height values', () => {
    expect(magnifier(beforeDisplay, setDisplaySize(100, 80))).toEqual(after);
  });
});
