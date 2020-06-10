import { REGISTER_USER, LOGIN_USER, CLEAR_LOGGED_USER, STORE_LOGGED_USER, LOGOUT_USER } from './auth.constants';

export interface IAuthState {
  readonly loggedUser: IUserWithToken | null;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserRegistration {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export interface IUserWithToken {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

export interface IStoreLoggedUserAction {
  type: typeof STORE_LOGGED_USER;
  payload: IUserWithToken;
}

export interface IClearLoggedUserAction {
  type: typeof CLEAR_LOGGED_USER;
}

export interface IRegisterUserAction {
  type: typeof REGISTER_USER;
  payload: IUserRegistration;
}

export interface ILoginUserAction {
  type: typeof LOGIN_USER;
  payload: IUserCredentials;
}

export interface ILogoutUserAction {
  type: typeof LOGOUT_USER;
}

export type IAuthAction = IStoreLoggedUserAction | IClearLoggedUserAction;
