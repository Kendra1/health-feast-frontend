import * as types from "./registration-values.types";
import * as constants from "./registration-values.constants";

export const storeName = (payload: string): types.IStoreNameAction => ({
  type: constants.STORE_NAME,
  payload,
});

export const storeLastname = (payload: string): types.IStoreLastnameAction => ({
  type: constants.STORE_LASTNAME,
  payload,
});

export const storeEmail = (payload: string): types.IStoreEmailAction => ({
  type: constants.STORE_EMAIL,
  payload,
});

export const storeUsername = (payload: string): types.IStoreUsernameAction => ({
  type: constants.STORE_USERNAME,
  payload,
});

export const storePassword = (payload: string): types.IStorePasswordAction => ({
  type: constants.STORE_PASSWORD,
  payload,
});

export const storePasswordConfirmation = (
  payload: string
): types.IStorePasswordConfirmationAction => ({
  type: constants.STORE_PASSWORD_CONFIRMATION,
  payload,
});

export const storeBirthDate = (
  payload: string
): types.IStoreBirthDateAction => ({
  type: constants.STORE_BIRTH_DATE,
  payload,
});

export const clearName = (): types.IClearNameAction => ({
  type: constants.CLEAR_NAME,
});

export const clearLastname = (): types.IClearLastnameAction => ({
  type: constants.CLEAR_LASTNAME,
});

export const clearEmail = (): types.IClearEmailAction => ({
  type: constants.CLEAR_EMAIL,
});

export const clearUsername = (): types.IClearUsernameAction => ({
  type: constants.CLEAR_USERNAME,
});

export const clearPassword = (): types.IClearPasswordAction => ({
  type: constants.CLEAR_PASSWORD,
});

export const clearPasswordConfirmation = (): types.IClearPasswordConfirmationAction => ({
  type: constants.CLEAR_PASSWORD_CONFIRMATION,
});

export const clearBirthDate = (): types.IClearBirthDateAction => ({
  type: constants.CLEAR_BIRTH_DATE,
});

export const changeName = (payload: string): types.IChangeNameAction => ({
  type: constants.CHANGE_NAME,
  payload,
});

export const changeLastname = (
  payload: string
): types.IChangeLastnameAction => ({
  type: constants.CHANGE_LASTNAME,
  payload,
});

export const changeEmail = (payload: string): types.IChangeEmailAction => ({
  type: constants.CHANGE_EMAIL,
  payload,
});

export const changeUsername = (
  payload: string
): types.IChangeUsernameAction => ({
  type: constants.CHANGE_USERNAME,
  payload,
});

export const changePassword = (
  payload: string
): types.IChangePasswordAction => ({
  type: constants.CHANGE_PASSWORD,
  payload,
});

export const changePasswordConfirmation = (
  payload: string
): types.IChangePasswordConfirmationAction => ({
  type: constants.CHANGE_PASSWORD_CONFIRMATION,
  payload,
});

export const changeBirthDate = (
  payload: string
): types.IChangeBirthDateAction => ({
  type: constants.CHANGE_BIRTH_DATE,
  payload,
});

export const clearRegistrationForm = (): types.IClearRegistrationForm => ({
  type: constants.CLEAR_REGISTRATION_FORM,
});

export const submitRegistrationForm = (): types.ISubmitRegistrationForm => ({
  type: constants.SUBMIT_REGISTRATION_FORM,
});
