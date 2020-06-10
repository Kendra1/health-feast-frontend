import * as types from './login-values.types';
import * as constants from './login-values.constants';
import { IUserCredentials } from '../../auth/auth.types';

export const storeEmailValue = (payload: IUserCredentials['email']): types.IStoreEmailValueAction => ({
  type: constants.STORE_EMAIL_VALUE,
  payload,
});

export const clearEmailValue = (): types.IClearEmailValueAction => ({
  type: constants.CLEAR_EMAIL_VALUE,
});

export const clearPasswordValue = (): types.IClearPasswordValueAction => ({
  type: constants.CLEAR_PASSWORD_VALUE,
});

export const storePasswordValue = (payload: IUserCredentials['password']): types.IStorePasswordValueAction => ({
  type: constants.STORE_PASSWORD_VALUE,
  payload,
});

export const clearLoginForm = (): types.IClearLoginFormAction => ({
  type: constants.CLEAR_LOGIN_FORM,
});

export const submitLoginForm = (): types.ISubmitLoginFormAction => ({
  type: constants.SUBMIT_LOGIN_FORM,
});

export const changeEmailValue = (payload: IUserCredentials['email']): types.IChangeEmailValueAction => ({
  type: constants.CHANGE_EMAIL_VALUE,
  payload,
});

export const changePasswordValue = (payload: IUserCredentials['password']): types.IChangePasswordValueAction => ({
  type: constants.CHANGE_PASSWORD_VALUE,
  payload,
});
