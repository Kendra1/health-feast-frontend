import { put } from "redux-saga/effects";

import * as types from "./registration-values.types";
import * as actions from "./registration-values.actions";

export function* changeNameSaga(action: types.IChangeNameAction) {
  yield put(actions.storeName(action.payload));
}

export function* changeLastnameSaga(action: types.IChangeLastnameAction) {
  yield put(actions.storeLastname(action.payload));
}

export function* changeEmailSaga(action: types.IChangeEmailAction) {
  yield put(actions.storeEmail(action.payload));
}

export function* changeUsernameSaga(action: types.IChangeUsernameAction) {
  yield put(actions.storeUsername(action.payload));
}

export function* changePasswordSaga(action: types.IChangePasswordAction) {
  yield put(actions.storePassword(action.payload));
}

export function* changePasswordConfirmationSaga(
  action: types.IChangePasswordConfirmationAction
) {
  yield put(actions.storePasswordConfirmation(action.payload));
}

export function* changeBirthDateSaga(action: types.IChangeBirthDateAction) {
  yield put(actions.storeBirthDate(action.payload));
}
