//import { setColorHex } from '../../src/actions';
import ui from '../../src/reducers/ui';
import { defaultState } from '../../src/reducers/ui';

describe('ui', () => {
  test('Should return default state for undefined state', () => {
    expect(ui(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(ui(defaultState, { type: null })).toEqual(defaultState);
  });

/*
  test('Should set color from hex value', () => {
    expect(ui({}, setColorHex(colorHex))).toEqual(color);
  });
*/
});
