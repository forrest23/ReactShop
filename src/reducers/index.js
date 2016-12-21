import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import product from './product';

export default combineReducers({
  user,
  runtime,
  product,
});
