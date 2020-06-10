import * as constants from "./registration-values.constants";

export interface IUserInfo {
  name: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  passwordConfirmation: string;
  birthDate: string;
}

export interface IStoreNameAction {
  type: typeof constants.STORE_NAME;
  payload: string;
}

export interface IStoreLastnameAction {
  type: typeof constants.STORE_LASTNAME;
  payload: string;
}

export interface IStoreEmailAction {
  type: typeof constants.STORE_EMAIL;
  payload: string;
}

export interface IStoreUsernameAction {
  type: typeof constants.STORE_USERNAME;
  payload: string;
}

export interface IStorePasswordAction {
  type: typeof constants.STORE_PASSWORD;
  payload: string;
}

export interface IStorePasswordConfirmationAction {
  type: typeof constants.STORE_PASSWORD_CONFIRMATION;
  payload: string;
}

export interface IStoreBirthDateAction {
  type: typeof constants.STORE_BIRTH_DATE;
  payload: string;
}

export interface IClearNameAction {
  type: typeof constants.CLEAR_NAME;
}

export interface IClearLastnameAction {
  type: typeof constants.CLEAR_LASTNAME;
}

export interface IClearEmailAction {
  type: typeof constants.CLEAR_EMAIL;
}

export interface IClearUsernameAction {
  type: typeof constants.CLEAR_USERNAME;
}

export interface IClearPasswordAction {
  type: typeof constants.CLEAR_PASSWORD;
}

export interface IClearPasswordConfirmationAction {
  type: typeof constants.CLEAR_PASSWORD_CONFIRMATION;
}

export interface IClearBirthDateAction {
  type: typeof constants.CLEAR_BIRTH_DATE;
}

export interface IChangeNameAction {
  type: typeof constants.CHANGE_NAME;
  payload: string;
}

export interface IChangeLastnameAction {
  type: typeof constants.CHANGE_LASTNAME;
  payload: string;
}

export interface IChangeEmailAction {
  type: typeof constants.CHANGE_EMAIL;
  payload: string;
}

export interface IChangeUsernameAction {
  type: typeof constants.CHANGE_USERNAME;
  payload: string;
}

export interface IChangePasswordAction {
  type: typeof constants.CHANGE_PASSWORD;
  payload: string;
}

export interface IChangePasswordConfirmationAction {
  type: typeof constants.CHANGE_PASSWORD_CONFIRMATION;
  payload: string;
}

export interface IChangeBirthDateAction {
  type: typeof constants.CHANGE_BIRTH_DATE;
  payload: string;
}

export interface IClearRegistrationForm {
  type: typeof constants.CLEAR_REGISTRATION_FORM;
}

export interface ISubmitRegistrationForm {
  type: typeof constants.SUBMIT_REGISTRATION_FORM;
}

export type INameActions = IStoreNameAction | IClearNameAction;
export type ILastnameActions = IStoreLastnameAction | IClearLastnameAction;
export type IEmailActions = IStoreEmailAction | IClearEmailAction;
export type IUsernameActions = IStoreUsernameAction | IClearUsernameAction;
export type IPasswordActions = IStorePasswordAction | IClearPasswordAction;
export type IPasswordConfirmationActions =
  | IStorePasswordConfirmationAction
  | IClearPasswordConfirmationAction;
export type IBirthDateActions = IStoreBirthDateAction | IClearBirthDateAction;

export type IRegistrationFormActions =
  | INameActions
  | ILastnameActions
  | IEmailActions
  | IUsernameActions
  | IPasswordActions
  | IPasswordConfirmationActions
  | IBirthDateActions;
