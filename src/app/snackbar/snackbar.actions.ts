import * as types from './snackbar.types';
import * as constants from './snackbar.constants';

export const storeSnackbarMessages = (payload: types.IMessageObject[]): types.IStoreSnackbarMessagesAction => ({
  type: constants.STORE_SNACKBAR_MESSAGES,
  payload,
});

export const clearSnackbarMessages = (): types.IClearSnackbarMessagesAction => ({
  type: constants.CLEAR_SNACKBAR_MESSAGES,
});
