import { IAppState } from '../app.types';
import { createSelector } from 'reselect';

const _selectSnackbarMessages = (state: IAppState) => state.snackbar.messages;

export const selectSnackbarMessages = createSelector(_selectSnackbarMessages, (value) => value);
