import { createSelector } from 'reselect';
import { IAppState } from '../../app.types';

const _selectEmailFieldErrors = (state: IAppState) => state.loginForm.errors.emailErrors;
const _selectPasswordFieldErrors = (state: IAppState) => state.loginForm.errors.passwordErrors;

export const selectEmailFieldErrors = createSelector(_selectEmailFieldErrors, (value) => value);
export const selectPasswordFieldErrors = createSelector(_selectPasswordFieldErrors, (value) => value);
