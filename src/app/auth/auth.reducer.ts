import { Reducer, combineReducers } from 'redux';

import { IAuthState, IAuthAction } from './auth.types';
import { STORE_LOGGED_USER, CLEAR_LOGGED_USER } from './auth.constants';

const initialState: IAuthState = {
  loggedUser: null,
};

const loggedUserReducer: Reducer<IAuthState['loggedUser'], IAuthAction> = (
  state: IAuthState['loggedUser'] = initialState.loggedUser,
  action: IAuthAction,
) => {
  if (action.type === STORE_LOGGED_USER) {
    return action.payload;
  } else if (action.type === CLEAR_LOGGED_USER) {
    return null;
  }
  return state;
};

export const authReducer: Reducer<IAuthState, IAuthAction> = combineReducers({
  loggedUser: loggedUserReducer,
});
