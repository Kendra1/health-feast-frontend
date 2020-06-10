import * as constants from './login-errors.constants';

export interface IErrorsState {
  readonly emailErrors: string[];
  readonly passwordErrors: string[];
}

export interface IStoreEmailErrorsAction {
  type: typeof constants.STORE_EMAIL_ERRORS;
  payload: IErrorsState['emailErrors'];
}

export interface IStorePasswordErrorsAction {
  type: typeof constants.STORE_PASSWORD_ERRORS;
  payload: IErrorsState['passwordErrors'];
}

export interface IClearEmailErrorsAction {
  type: typeof constants.CLEAR_EMAIL_ERRORS;
}

export interface IClearPasswordErrorsAction {
  type: typeof constants.CLEAR_PASSWORD_ERRORS;
}

export type IEmailErrorsActions = IStoreEmailErrorsAction | IClearEmailErrorsAction;

export type IPasswordErrorsActions = IStorePasswordErrorsAction | IClearPasswordErrorsAction;

export type IFormErrorsActions = IEmailErrorsActions | IPasswordErrorsActions;
