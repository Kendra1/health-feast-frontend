import * as types from './login-form.types';

import * as constants from './login-form.constants';

export const storeIsLoadingValue = (payload: boolean): types.IStoreIsLoadingValueAction => ({
  type: constants.STORE_IS_LOADING_VALUE,
  payload,
});

export const setIsLoadingValue = (payload: boolean): types.ISetIsLoadingValueAction => ({
  type: constants.SET_IS_LOADING_VALUE,
  payload,
});
