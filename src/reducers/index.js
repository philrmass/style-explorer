import { combineReducers } from 'redux';
import currentColor from './currentColor';
import * as cc from './currentColor';
import currentSource from './currentSource';
import * as cs from './currentSource';
import sources from './sources';
import * as s from './sources';
import magnifier from './magnifier';
import * as m from './magnifier';
import ui from './ui';
import * as u from './ui';

export const defaultState = { 
  currentColor: cc.defaultState,
  sources: s.defaultState,
  currentSource: cs.defaultState,
  magnifier: m.defaultState,
  ui: u.defaultState,
};

const rootReducer = combineReducers({
  currentColor,
  sources,
  currentSource,
  magnifier,
  ui
});

export default rootReducer;
