import { IInitState, IInitAction, IStoreInitCompleteAction } from './init.types';
import { Reducer, combineReducers } from 'redux';
import { STORE_INIT_COMPLETE } from './init.constants';

const initialState: IInitState = {
  isInitComplete: false,
};

const initCompleteReducer: Reducer<IInitState['isInitComplete'], IStoreInitCompleteAction> = (
  state = initialState.isInitComplete,
  action,
) => {
  if (action.type === STORE_INIT_COMPLETE) {
    return true;
  }

  return state;
};

export const initReducer: Reducer<IInitState, IInitAction> = combineReducers({
  isInitComplete: initCompleteReducer,
});
