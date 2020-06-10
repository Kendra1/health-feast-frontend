import { Reducer, combineReducers } from "redux";

import {
  IRegistrationFormStateRaw,
  IStoreIsLoadingValueAction,
  IRegistrationFormState,
  IFormActions,
} from "./registration-form.types";
import { STORE_IS_LOADING_VALUE } from "./registration-form.constants";
import { registrationFormValuesReducer } from "./values/registration-values.reducer";
import { registrationFormErrorsReducer } from "./errors/registration-errors.reducer";

const initialState: IRegistrationFormStateRaw = {
  isLoading: false,
};

const _isLoadingReducer: Reducer<
  IRegistrationFormState["isLoading"],
  IStoreIsLoadingValueAction
> = (
  state: IRegistrationFormState["isLoading"] = initialState.isLoading,
  action: IStoreIsLoadingValueAction
) => {
  if (action.type === STORE_IS_LOADING_VALUE) {
    return action.payload;
  }
  return state;
};

export const registrationFormReducer: Reducer<
  IRegistrationFormState,
  IFormActions
> = combineReducers({
  userInfo: registrationFormValuesReducer,
  isLoading: _isLoadingReducer,
  errors: registrationFormErrorsReducer,
});
