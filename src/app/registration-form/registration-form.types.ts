import {
  STORE_IS_LOADING_VALUE,
  SET_IS_LOADING_VALUE,
} from "./registration-form.constants";
import {
  IUserInfo,
  IRegistrationFormActions,
} from "./values/registration-values.types";
import { IErrorsState } from "./errors/registration-errors.types";

export interface IRegistrationFormStateRaw {
  readonly isLoading: boolean;
}

export interface IRegistrationFormState extends IRegistrationFormStateRaw {
  readonly userInfo: IUserInfo;
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
  | IStoreIsLoadingValueAction
  | IRegistrationFormActions;
