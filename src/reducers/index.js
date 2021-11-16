import { combineReducers } from 'redux';
import { globalState } from './globalState';
import { userState } from './auth';

export default combineReducers({
  globalState,
  userState,
});
