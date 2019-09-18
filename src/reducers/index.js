import { combineReducers } from 'redux';
import { user } from './user';
import { errorMsg } from './errorMsg';
import { messages } from './messagesReducer';

const rootReducer = combineReducers({
  user,
  errorMsg,
  messages
});

export default rootReducer;