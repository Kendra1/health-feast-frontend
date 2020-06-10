import { put, select, call } from 'redux-saga/effects';

import { loginUser } from '../auth/auth.actions';
import { logUserIn } from '../auth/auth.saga';
import { IUserCredentials } from '../auth/auth.types';
import { ISetIsLoadingValueAction } from './login-form.types';
import { storeIsLoadingValue } from './login-form.actions';
import { clearLoginForm, clearEmailValue, clearPasswordValue } from './values/login-values.actions';
import { selectLoginFormValues } from './values/login-values.selectors';
import { clearEmailErrors, clearPasswordErrors } from './errors/login-errors.actions';
import { handleErrorMessages } from './login-form.service';

export function* setIsLoadingValueSaga(action: ISetIsLoadingValueAction) {
  yield put(storeIsLoadingValue(action.payload));
}

export function* submitLoginFormSaga() {
  yield call(cleanLoginErrors);
  const userCredentials: IUserCredentials = yield select(selectLoginFormValues);
  yield put(storeIsLoadingValue(true));
  try {
    yield call(logUserIn, userCredentials);
    yield put(loginUser(userCredentials));
    yield put(clearLoginForm());
  } catch (error) {
    if (error.response.data.message) {
      yield call(handleErrorMessages, error.response.data.message);
    } else {
      console.error(error);
    }
  } finally {
    yield put(storeIsLoadingValue(false));
  }
}

export function* cleanLoginFormSaga() {
  yield call(cleanLoginErrors);
  yield put(clearEmailValue());
  yield put(clearPasswordValue());
  yield put(storeIsLoadingValue(false));
}

export function* cleanLoginErrors() {
  yield put(clearEmailErrors());
  yield put(clearPasswordErrors());
}
