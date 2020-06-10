import { Reducer, combineReducers } from 'redux';

import * as types from './login-values.types';
import * as constants from './login-values.constants';
import { IUserCredentials } from '../../auth/auth.types';

const initialState: IUserCredentials = {
  email: '',
  password: '',
};

const _emailReducer: Reducer<IUserCredentials['email'], types.IFormValuesActions> = (
  state: IUserCredentials['email'] = initialState.email,
  action: types.IFormValuesActions,
) => {
  if (action.type === constants.STORE_EMAIL_VALUE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL_VALUE) {
    return '';
  }
  return state;
};

const _passwordReducer: Reducer<IUserCredentials['password'], types.IFormValuesActions> = (
  state: IUserCredentials['password'] = initialState.password,
  action: types.IFormValuesActions,
) => {
  if (action.type === constants.STORE_PASSWORD_VALUE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_VALUE) {
    return '';
  }
  return state;
};

export const loginFormValuesReducer: Reducer<IUserCredentials, types.IFormValuesActions> = combineReducers({
  email: _emailReducer,
  password: _passwordReducer,
});
