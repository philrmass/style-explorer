import currentColor from './currentColor';
import currentSource from './currentSource';
import sources from './sources';
import magnifier from './magnifier';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentColor,
  sources,
  currentSource,
  magnifier
});

export default rootReducer;
