import { put } from 'redux-saga/effects';
import { IChangeEmailValueAction, IChangePasswordValueAction } from './login-values.types';
import { storeEmailValue, storePasswordValue } from './login-values.actions';

export function* changeEmailValueSaga(action: IChangeEmailValueAction) {
  yield put(storeEmailValue(action.payload));
}

export function* changePasswordValueSaga(action: IChangePasswordValueAction) {
  yield put(storePasswordValue(action.payload));
}
