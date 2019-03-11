import currentColor from './currentColor';
import sources from './sources';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  currentColor,
  sources
});

export default rootReducer;
