import currentColor from './currentColor';
import sources from './sources';
import currentSource from './currentSource';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentColor,
  sources,
  currentSource
});

export default rootReducer;
