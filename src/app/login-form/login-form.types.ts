import { IUserCredentials } from "../auth/auth.types";
import {
  STORE_IS_LOADING_VALUE,
  SET_IS_LOADING_VALUE,
} from "./login-form.constants";
import { IFormValuesActions } from "./values/login-values.types";
import { IErrorsState, IFormErrorsActions } from "./errors/login-errors.types";

export interface ILoginFormStateRaw {
  readonly isLoading: boolean;
}

export interface ILoginFormState extends ILoginFormStateRaw {
  readonly userCredentials: IUserCredentials;
  readonly errors: IErrorsState;
}

export interface IStoreIsLoadingValueAction {
  type: typeof STORE_IS_LOADING_VALUE;
  payload: boolean;
}

export interface ISetIsLoadingValueAction {
  type: typeof SET_IS_LOADING_VALUE;
  payload: boolean;
}

export type IFormActions =
  | IFormValuesActions
  | IFormErrorsActions
  | IStoreIsLoadingValueAction;
