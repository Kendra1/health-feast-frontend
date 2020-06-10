import { put } from "redux-saga/effects";
import { ISetIsLoadingValueAction } from "./registration-form.types";
import { storeIsLoadingValue } from "./registration-form.actions";

export function* setIsLoadingValueSaga(action: ISetIsLoadingValueAction) {
  yield put(storeIsLoadingValue(action.payload));
}
