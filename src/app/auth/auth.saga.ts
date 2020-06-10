import { call, put } from "redux-saga/effects";
import apiRequest from "../api/api.saga";

import { IRegisterUserAction, IUserCredentials } from "./auth.types";
import { storeLoggedUser, clearLoggedUser } from "./auth.actions";
import {
  persistLoggedUser,
  readLoggedUser,
  abandonLoggedUser,
} from "./auth.utils";
import { registerAPI, loginAPI } from "./auth.api";

export function* registerNewUser(action: IRegisterUserAction) {
  yield call(apiRequest, registerAPI(action.payload));
}

export function* logUserIn(userCredentials: IUserCredentials) {
  const loggedUser = yield call(apiRequest, loginAPI(userCredentials));
  yield call(persistLoggedUser, loggedUser);
  yield put(storeLoggedUser(loggedUser));
}

export function* initAuth() {
  const loggedUser = yield call(readLoggedUser);

  if (loggedUser) {
    yield put(storeLoggedUser(loggedUser));
  }
}

export function* logUserOut() {
  yield put(clearLoggedUser());
  yield call(abandonLoggedUser);
}
