import * as types from './login-errors.types';
import * as constants from './login-errors.constants';

export const storeEmailErrors = (payload: types.IErrorsState['emailErrors']): types.IStoreEmailErrorsAction => ({
  type: constants.STORE_EMAIL_ERRORS,
  payload,
});

export const storePasswordErrors = (
  payload: types.IErrorsState['passwordErrors'],
): types.IStorePasswordErrorsAction => ({
  type: constants.STORE_PASSWORD_ERRORS,
  payload,
});

export const clearEmailErrors = (): types.IClearEmailErrorsAction => ({
  type: constants.CLEAR_EMAIL_ERRORS,
});

export const clearPasswordErrors = (): types.IClearPasswordErrorsAction => ({
  type: constants.CLEAR_PASSWORD_ERRORS,
});
