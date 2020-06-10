import { Reducer, combineReducers } from "redux";

import * as types from "./registration-errors.types";
import * as constants from "./registration-errors.constants";

const initialState: types.IErrorsState = {
  nameErrors: [],
  lastnameErrors: [],
  emailErrors: [],
  usernameErrors: [],
  passwordErrors: [],
  passwordConfirmationErrors: [],
  birthDateErrors: [],
};

const _nameErrorsReducer: Reducer<
  types.IErrorsState["nameErrors"],
  types.INameErrorsActions
> = (
  state: types.IErrorsState["nameErrors"] = initialState.nameErrors,
  action: types.INameErrorsActions
) => {
  if (action.type === constants.STORE_NAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_NAME_ERRORS) {
    return [];
  }
  return state;
};

const _lastnameErrorsReducer: Reducer<
  types.IErrorsState["lastnameErrors"],
  types.ILastnameErrorsActions
> = (
  state: types.IErrorsState["lastnameErrors"] = initialState.lastnameErrors,
  action: types.ILastnameErrorsActions
) => {
  if (action.type === constants.STORE_LASTNAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_LASTNAME_ERRORS) {
    return [];
  }
  return state;
};

const _emailErrorsReducer: Reducer<
  types.IErrorsState["emailErrors"],
  types.IEmailErrorsActions
> = (
  state: types.IErrorsState["emailErrors"] = initialState.emailErrors,
  action: types.IEmailErrorsActions
) => {
  if (action.type === constants.STORE_EMAIL_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL_ERRORS) {
    return [];
  }
  return state;
};

const _usernameErrorsReducer: Reducer<
  types.IErrorsState["usernameErrors"],
  types.IUsernameErrorsActions
> = (
  state: types.IErrorsState["usernameErrors"] = initialState.usernameErrors,
  action: types.IUsernameErrorsActions
) => {
  if (action.type === constants.STORE_USERNAME_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_USERNAME_ERRORS) {
    return [];
  }
  return state;
};

const _passwordErrorsReducer: Reducer<
  types.IErrorsState["passwordErrors"],
  types.IPasswordErrorsActions
> = (
  state: types.IErrorsState["passwordErrors"] = initialState.passwordErrors,
  action: types.IPasswordErrorsActions
) => {
  if (action.type === constants.STORE_PASSWORD_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_ERRORS) {
    return [];
  }
  return state;
};

const _passwordConfirmationErrorsReducer: Reducer<
  types.IErrorsState["passwordConfirmationErrors"],
  types.IPasswordConfirmationErrorsActions
> = (
  state: types.IErrorsState["passwordConfirmationErrors"] = initialState.passwordConfirmationErrors,
  action: types.IPasswordConfirmationErrorsActions
) => {
  if (action.type === constants.STORE_PASSWORD_CONFIRMATION_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_CONFIRMATION_ERRORS) {
    return [];
  }
  return state;
};

const _birthDateErrorsReducer: Reducer<
  types.IErrorsState["birthDateErrors"],
  types.IBirthDateErrorsActions
> = (
  state: types.IErrorsState["birthDateErrors"] = initialState.birthDateErrors,
  action: types.IBirthDateErrorsActions
) => {
  if (action.type === constants.STORE_BIRTH_DATE_ERRORS) {
    return action.payload;
  } else if (action.type === constants.CLEAR_BIRTH_DATE_ERRORS) {
    return [];
  }
  return state;
};

export const registrationFormErrorsReducer: Reducer<
  types.IErrorsState,
  types.IRegistrationFormErrorsActions
> = combineReducers({
  nameErrors: _nameErrorsReducer,
  lastnameErrors: _lastnameErrorsReducer,
  emailErrors: _emailErrorsReducer,
  usernameErrors: _usernameErrorsReducer,
  passwordErrors: _passwordErrorsReducer,
  passwordConfirmationErrors: _passwordConfirmationErrorsReducer,
  birthDateErrors: _birthDateErrorsReducer,
});
