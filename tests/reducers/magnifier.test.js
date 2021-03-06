import { setCursorPosition, setFullSize, setDisplaySize } from '../../src/actions';
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
    displayWidth: 500,
    displayHeight: 400,
    x: 100, 
    y: 80, 
    width: 20, 
    height: 20,
    cursorX: 0,
    cursorY: 0, 
    cursorWidth: 0, 
    cursorHeight: 0
  };

  const after = {
    fullWidth: 1000,
    fullHeight: 800,
    displayWidth: 500,
    displayHeight: 400,
    x: 100, 
    y: 80, 
    width: 20, 
    height: 20,
    cursorX: 50,
    cursorY: 40,
    cursorWidth: 10, 
    cursorHeight: 10 
  };

  test('Should set magnifier position from x and y values', () => {
    expect(magnifier(beforePosition, setCursorPosition(55, 45))).toEqual(after);
  });

  const beforeFull= {
    fullWidth: 1,
    fullHeight: 1,
    displayWidth: 500,
    displayHeight: 400,
    x: 100, 
    y: 80, 
    width: 20, 
    height: 20,
    cursorX: 0,
    cursorY: 0,
    cursorWidth: 1, 
    cursorHeight: 1 
  };

  test('Should set full size from width and height values', () => {
    expect(magnifier(beforeFull, setFullSize(1000, 800))).toEqual(after);
  });

  const beforeDisplay = {
    fullWidth: 1000,
    fullHeight: 800,
    displayWidth: 1,
    displayHeight: 1,
    x: 100, 
    y: 80, 
    width: 20, 
    height: 20,
    cursorX: 0,
    cursorY: 0,
    cursorWidth: 1, 
    cursorHeight: 1 
  };

  test('Should set display size from width and height values', () => {
    expect(magnifier(beforeDisplay, setDisplaySize(500, 400))).toEqual(after);
  });
});
