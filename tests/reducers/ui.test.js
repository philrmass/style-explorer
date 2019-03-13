import { toggleColorPicker, toggleSource, toggleSources, toggleGraph } from '../../src/actions';
import ui from '../../src/reducers/ui';
import { defaultState } from '../../src/reducers/ui';

describe('ui', () => {
  test('Should return default state for undefined state', () => {
    expect(ui(undefined, { type: null })).toEqual(defaultState);
  });

  test('Should return same state for undefined action', () => {
    expect(ui(defaultState, { type: null })).toEqual(defaultState);
  });

  const colorPickerOn = {
    ...defaultState,
    colorPickerIsOpen: true
  };

  test('Should toggle color picker open value', () => {
    expect(ui(defaultState, toggleColorPicker())).toEqual(colorPickerOn);
  });

  const sourceOn = {
    ...defaultState,
    sourceIsOpen: true
  };

  test('Should toggle source open value', () => {
    expect(ui(defaultState, toggleSource())).toEqual(sourceOn);
  });

  const sourcesOn = {
    ...defaultState,
    sourcesIsOpen: true
  };

  test('Should toggle sources open value', () => {
    expect(ui(defaultState, toggleSources())).toEqual(sourcesOn);
  });

  const graphOn = {
    ...defaultState,
    graphIsOpen: true
  };

  test('Should toggle graph open value', () => {
    expect(ui(defaultState, toggleGraph())).toEqual(graphOn);
  });
});
