import {
  IRegisterUserAction,
  ILoginUserAction,
  IUserWithToken,
  IUserCredentials,
  IUserRegistration,
  IStoreLoggedUserAction,
  IClearLoggedUserAction,
  ILogoutUserAction,
} from './auth.types';
import { REGISTER_USER, LOGIN_USER, STORE_LOGGED_USER, CLEAR_LOGGED_USER, LOGOUT_USER } from './auth.constants';

export const storeLoggedUser = (payload: IUserWithToken): IStoreLoggedUserAction => ({
  type: STORE_LOGGED_USER,
  payload,
});

export const clearLoggedUser = (): IClearLoggedUserAction => ({
  type: CLEAR_LOGGED_USER,
});

export const registerUser = (payload: IUserRegistration): IRegisterUserAction => ({
  type: REGISTER_USER,
  payload,
});

export const loginUser = (payload: IUserCredentials): ILoginUserAction => ({
  type: LOGIN_USER,
  payload,
});

export const logoutUser = (): ILogoutUserAction => ({
  type: LOGOUT_USER,
});
