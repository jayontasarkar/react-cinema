import { combineReducers } from 'redux';
import errors from './errors';
import movies from './movies';

const rootReducer = combineReducers({
  errors,
  movies
});

export default rootReducer;
