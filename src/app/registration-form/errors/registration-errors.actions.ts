import * as types from "./registration-errors.types";
import * as constants from "./registration-errors.constants";

export const storeNameErrors = (
  payload: types.IErrorsState["nameErrors"]
): types.IStoreNameErrorsAction => ({
  type: constants.STORE_NAME_ERRORS,
  payload,
});

export const storeLastnameErrors = (
  payload: types.IErrorsState["lastnameErrors"]
): types.IStoreLastnameErrorsAction => ({
  type: constants.STORE_LASTNAME_ERRORS,
  payload,
});

export const storeEmailErrors = (
  payload: types.IErrorsState["emailErrors"]
): types.IStoreEmailErrorsAction => ({
  type: constants.STORE_EMAIL_ERRORS,
  payload,
});

export const storeUserameErrors = (
  payload: types.IErrorsState["usernameErrors"]
): types.IStoreUsernameErrorsAction => ({
  type: constants.STORE_USERNAME_ERRORS,
  payload,
});

export const storePasswordErrors = (
  payload: types.IErrorsState["passwordErrors"]
): types.IStorePasswordErrorsAction => ({
  type: constants.STORE_PASSWORD_ERRORS,
  payload,
});

export const storePasswordconfirmationErrors = (
  payload: types.IErrorsState["passwordConfirmationErrors"]
): types.IStorePasswordConfirmationErrorsAction => ({
  type: constants.STORE_PASSWORD_CONFIRMATION_ERRORS,
  payload,
});

export const storeBirthDaterrors = (
  payload: types.IErrorsState["birthDateErrors"]
): types.IStoreBirthDateErrorsAction => ({
  type: constants.STORE_BIRTH_DATE_ERRORS,
  payload,
});

export const clearNameErrors = (): types.IClearNameErrorsAction => ({
  type: constants.CLEAR_NAME_ERRORS,
});

export const clearLastnameErrors = (): types.IClearLastnameErrorsAction => ({
  type: constants.CLEAR_LASTNAME_ERRORS,
});

export const clearEmailErrors = (): types.IClearEmailErrorsAction => ({
  type: constants.CLEAR_EMAIL_ERRORS,
});

export const clearUsernameErrors = (): types.IClearUsernameErrorsAction => ({
  type: constants.CLEAR_USERNAME_ERRORS,
});

export const clearPasswordErrors = (): types.IClearPasswordErrorsAction => ({
  type: constants.CLEAR_PASSWORD_ERRORS,
});

export const clearPasswordConfirmationErrors = (): types.IClearPasswordConfirmationErrorsAction => ({
  type: constants.CLEAR_PASSWORD_CONFIRMATION_ERRORS,
});

export const clearBirthDateErrors = (): types.IClearBirthDateErrorsAction => ({
  type: constants.CLEAR_BIRTH_DATE_ERRORS,
});
