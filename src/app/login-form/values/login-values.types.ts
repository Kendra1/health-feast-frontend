import * as constants from './login-values.constants';
import { IUserCredentials } from '../../auth/auth.types';

export interface IStoreEmailValueAction {
  type: typeof constants.STORE_EMAIL_VALUE;
  payload: IUserCredentials['email'];
}

export interface IStorePasswordValueAction {
  type: typeof constants.STORE_PASSWORD_VALUE;
  payload: IUserCredentials['password'];
}

export interface IClearEmailValueAction {
  type: typeof constants.CLEAR_EMAIL_VALUE;
}

export interface IClearPasswordValueAction {
  type: typeof constants.CLEAR_PASSWORD_VALUE;
}

export interface IClearLoginFormAction {
  type: typeof constants.CLEAR_LOGIN_FORM;
}

export interface ISubmitLoginFormAction {
  type: typeof constants.SUBMIT_LOGIN_FORM;
}

export interface IChangeEmailValueAction {
  type: typeof constants.CHANGE_EMAIL_VALUE;
  payload: IUserCredentials['email'];
}

export interface IChangePasswordValueAction {
  type: typeof constants.CHANGE_PASSWORD_VALUE;
  payload: IUserCredentials['password'];
}

export type IFormValuesActions =
  | IStoreEmailValueAction
  | IStorePasswordValueAction
  | IClearEmailValueAction
  | IClearPasswordValueAction;
