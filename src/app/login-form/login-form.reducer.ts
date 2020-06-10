import { Reducer, combineReducers } from 'redux';

import { ILoginFormState, IStoreIsLoadingValueAction, IFormActions, ILoginFormStateRaw } from './login-form.types';
import { STORE_IS_LOADING_VALUE } from './login-form.constants';
import { loginFormValuesReducer } from './values/login-values.reducer';
import { loginFormErrorsReducer } from './errors/login-errors.reducer';

const initialState: ILoginFormStateRaw = {
  isLoading: false,
};

const _isLoadingReducer: Reducer<ILoginFormState['isLoading'], IStoreIsLoadingValueAction> = (
  state: ILoginFormState['isLoading'] = initialState.isLoading,
  action: IStoreIsLoadingValueAction,
) => {
  if (action.type === STORE_IS_LOADING_VALUE) {
    return action.payload;
  }
  return state;
};

export const loginFormReducer: Reducer<ILoginFormState, IFormActions> = combineReducers({
  userCredentials: loginFormValuesReducer,
  errors: loginFormErrorsReducer,
  isLoading: _isLoadingReducer,
});
