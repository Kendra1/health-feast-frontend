import * as constants from "./registration-errors.constants";
import { IPasswordConfirmationActions } from "../values/registration-values.types";

export interface IErrorsState {
  readonly nameErrors: string[];
  readonly lastnameErrors: string[];
  readonly emailErrors: string[];
  readonly usernameErrors: string[];
  readonly passwordErrors: string[];
  readonly passwordConfirmationErrors: string[];
  readonly birthDateErrors: string[];
}

export interface IStoreNameErrorsAction {
  type: typeof constants.STORE_NAME_ERRORS;
  payload: IErrorsState["nameErrors"];
}

export interface IStoreLastnameErrorsAction {
  type: typeof constants.STORE_LASTNAME_ERRORS;
  payload: IErrorsState["lastnameErrors"];
}

export interface IStoreEmailErrorsAction {
  type: typeof constants.STORE_EMAIL_ERRORS;
  payload: IErrorsState["emailErrors"];
}

export interface IStoreUsernameErrorsAction {
  type: typeof constants.STORE_USERNAME_ERRORS;
  payload: IErrorsState["usernameErrors"];
}

export interface IStorePasswordErrorsAction {
  type: typeof constants.STORE_PASSWORD_ERRORS;
  payload: IErrorsState["passwordErrors"];
}

export interface IStorePasswordConfirmationErrorsAction {
  type: typeof constants.STORE_PASSWORD_CONFIRMATION_ERRORS;
  payload: IErrorsState["passwordConfirmationErrors"];
}

export interface IStoreBirthDateErrorsAction {
  type: typeof constants.STORE_BIRTH_DATE_ERRORS;
  payload: IErrorsState["birthDateErrors"];
}

export interface IClearNameErrorsAction {
  type: typeof constants.CLEAR_NAME_ERRORS;
}

export interface IClearLastnameErrorsAction {
  type: typeof constants.CLEAR_LASTNAME_ERRORS;
}

export interface IClearEmailErrorsAction {
  type: typeof constants.CLEAR_EMAIL_ERRORS;
}

export interface IClearUsernameErrorsAction {
  type: typeof constants.CLEAR_USERNAME_ERRORS;
}

export interface IClearPasswordErrorsAction {
  type: typeof constants.CLEAR_PASSWORD_ERRORS;
}

export interface IClearPasswordConfirmationErrorsAction {
  type: typeof constants.CLEAR_PASSWORD_CONFIRMATION_ERRORS;
}

export interface IClearBirthDateErrorsAction {
  type: typeof constants.CLEAR_BIRTH_DATE_ERRORS;
}

export type INameErrorsActions =
  | IStoreNameErrorsAction
  | IClearNameErrorsAction;
export type ILastnameErrorsActions =
  | IStoreLastnameErrorsAction
  | IClearLastnameErrorsAction;
export type IEmailErrorsActions =
  | IStoreEmailErrorsAction
  | IClearEmailErrorsAction;
export type IUsernameErrorsActions =
  | IStoreUsernameErrorsAction
  | IClearUsernameErrorsAction;
export type IPasswordErrorsActions =
  | IStorePasswordErrorsAction
  | IClearPasswordErrorsAction;
export type IPasswordConfirmationErrorsActions =
  | IStorePasswordConfirmationErrorsAction
  | IClearPasswordConfirmationErrorsAction;
export type IBirthDateErrorsActions =
  | IStoreBirthDateErrorsAction
  | IClearBirthDateErrorsAction;

export type IRegistrationFormErrorsActions =
  | INameErrorsActions
  | ILastnameErrorsActions
  | IEmailErrorsActions
  | IUsernameErrorsActions
  | IPasswordErrorsActions
  | IPasswordConfirmationErrorsActions
  | IBirthDateErrorsActions;
