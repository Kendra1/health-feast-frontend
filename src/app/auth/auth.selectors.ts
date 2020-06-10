import { createSelector } from 'reselect';

import { IAppState } from '../app.types';

const _selectLoggedUser = (state: IAppState) => state.auth.loggedUser;
const _selectLoggedUserToken = (state: IAppState) => state.auth.loggedUser?.token;

export const selectLoggedUser = createSelector(_selectLoggedUser, (value) => value);
export const selectLoggedUserToken = createSelector(_selectLoggedUserToken, (value) => value);
