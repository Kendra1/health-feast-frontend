import * as types from './snackbar.types';
import { Reducer, combineReducers } from 'redux';
import { STORE_SNACKBAR_MESSAGES, CLEAR_SNACKBAR_MESSAGES } from './snackbar.constants';

const initialState: types.ISnackbarState = {
  messages: [],
};

export const _messagesReducer: Reducer<types.ISnackbarState['messages'], types.ISnackbarMessagesActions> = (
  state: types.ISnackbarState['messages'] = initialState.messages,
  action: types.ISnackbarMessagesActions,
) => {
  if (action.type === STORE_SNACKBAR_MESSAGES) {
    return action.payload;
  } else if (action.type === CLEAR_SNACKBAR_MESSAGES) {
    return [];
  }
  return state;
};

export const snackbarReducer: Reducer<types.ISnackbarState, types.ISnackbarActions> = combineReducers({
  messages: _messagesReducer,
});
