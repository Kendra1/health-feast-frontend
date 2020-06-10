import { STORE_SNACKBAR_MESSAGES, CLEAR_SNACKBAR_MESSAGES } from './snackbar.constants';

export interface ISnackbarState {
  readonly messages: IMessageObject[];
}

export interface IMessageObject {
  type: IMessageType;
  message: string;
}

export interface IStoreSnackbarMessagesAction {
  type: typeof STORE_SNACKBAR_MESSAGES;
  payload: IMessageObject[];
}

export interface IClearSnackbarMessagesAction {
  type: typeof CLEAR_SNACKBAR_MESSAGES;
}

export type ISnackbarMessagesActions = IStoreSnackbarMessagesAction | IClearSnackbarMessagesAction;

export type ISnackbarActions = ISnackbarMessagesActions;

export type IMessageType = 'error' | 'warning' | 'info' | 'success';
