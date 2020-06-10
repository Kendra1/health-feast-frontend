import { createSelector } from 'reselect';

import { IAppState } from '../../app.types';

const _selectLoginFormValues = (state: IAppState) => ({
  email: state.loginForm.userCredentials.email,
  password: state.loginForm.userCredentials.password,
});

const _selectEmail = (state: IAppState) => state.loginForm.userCredentials.email;
const _selectPassword = (state: IAppState) => state.loginForm.userCredentials.password;

export const selectLoginFormValues = createSelector(_selectLoginFormValues, (value) => value);
export const selectEmail = createSelector(_selectEmail, (value) => value);
export const selectPassword = createSelector(_selectPassword, (value) => value);
