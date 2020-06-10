import { Reducer, combineReducers } from "redux";

import * as types from "./registration-values.types";
import * as constants from "./registration-values.constants";

const initialState: types.IUserInfo = {
  name: "",
  lastname: "",
  email: "",
  username: "",
  password: "",
  passwordConfirmation: "",
  birthDate: "",
};

const _nameReducer: Reducer<types.IUserInfo["name"], types.INameActions> = (
  state: types.IUserInfo["name"] = initialState.name,
  action: types.INameActions
) => {
  if (action.type === constants.STORE_NAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_NAME) {
    return "";
  }
  return state;
};

const _lastnameReducer: Reducer<
  types.IUserInfo["lastname"],
  types.ILastnameActions
> = (
  state: types.IUserInfo["lastname"] = initialState.lastname,
  action: types.ILastnameActions
) => {
  if (action.type === constants.STORE_LASTNAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_LASTNAME) {
    return "";
  }
  return state;
};

const _emailReducer: Reducer<types.IUserInfo["email"], types.IEmailActions> = (
  state: types.IUserInfo["email"] = initialState.email,
  action: types.IEmailActions
) => {
  if (action.type === constants.STORE_EMAIL) {
    return action.payload;
  } else if (action.type === constants.CLEAR_EMAIL) {
    return "";
  }
  return state;
};

const _usernameReducer: Reducer<
  types.IUserInfo["username"],
  types.IUsernameActions
> = (
  state: types.IUserInfo["username"] = initialState.username,
  action: types.IUsernameActions
) => {
  if (action.type === constants.STORE_USERNAME) {
    return action.payload;
  } else if (action.type === constants.CLEAR_USERNAME) {
    return "";
  }
  return state;
};

const _passwordReducer: Reducer<
  types.IUserInfo["password"],
  types.IPasswordActions
> = (
  state: types.IUserInfo["password"] = initialState.password,
  action: types.IPasswordActions
) => {
  if (action.type === constants.STORE_PASSWORD) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD) {
    return "";
  }
  return state;
};

const _passwordConfirmationReducer: Reducer<
  types.IUserInfo["passwordConfirmation"],
  types.IPasswordConfirmationActions
> = (
  state: types.IUserInfo["passwordConfirmation"] = initialState.passwordConfirmation,
  action: types.IPasswordConfirmationActions
) => {
  if (action.type === constants.STORE_PASSWORD_CONFIRMATION) {
    return action.payload;
  } else if (action.type === constants.CLEAR_PASSWORD_CONFIRMATION) {
    return "";
  }
  return state;
};

const _birthDateReducer: Reducer<
  types.IUserInfo["birthDate"],
  types.IBirthDateActions
> = (
  state: types.IUserInfo["birthDate"] = initialState.birthDate,
  action: types.IBirthDateActions
) => {
  if (action.type === constants.STORE_BIRTH_DATE) {
    return action.payload;
  } else if (action.type === constants.CLEAR_BIRTH_DATE) {
    return "";
  }
  return state;
};

export const registrationFormValuesReducer: Reducer<
  types.IUserInfo,
  types.IRegistrationFormActions
> = combineReducers({
  name: _nameReducer,
  lastname: _lastnameReducer,
  email: _emailReducer,
  username: _usernameReducer,
  password: _passwordReducer,
  passwordConfirmation: _passwordConfirmationReducer,
  birthDate: _birthDateReducer,
});
