import { Reducer, combineReducers } from 'redux';

import * as constants from './login-errors.constants';
import * as types from './login-errors.types';

const initialState: types.IErrorsState = {
  emailErrors: [],
  passwordErrors: [],
};

const _emailErrorsReducer: Reducer<types.IErrorsState['emailErrors'], types.IEmailErrorsActions> = (
  state: types.IErrorsState['emailErrors'] = initialState.emailErrors,
  action: types.IEmailErrorsActions,
) => {
  if (action.type === constants.STORE_EMAIL_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL_ERRORS) {
    return [];
  }
  return state;
};

const _passwordErorrsReducer: Reducer<types.IErrorsState['passwordErrors'], types.IPasswordErrorsActions> = (
  state: types.IErrorsState['passwordErrors'] = initialState.passwordErrors,
  action: types.IPasswordErrorsActions,
) => {
  if (action.type === constants.STORE_PASSWORD_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_ERRORS) {
    return [];
  }
  return state;
};

export const loginFormErrorsReducer: Reducer<types.IErrorsState, types.IFormErrorsActions> = combineReducers({
  emailErrors: _emailErrorsReducer,
  passwordErrors: _passwordErorrsReducer,
});
