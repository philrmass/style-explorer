import currentColor from './currentColor';
import currentSource from './currentSource';
import sources from './sources';
import ui from './ui';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentColor,
  sources,
  currentSource,
  ui
});

export default rootReducer;
