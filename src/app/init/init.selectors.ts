import { createSelector } from 'reselect';
import { IAppState } from '../app.types';

const _selectIsInitComplete = (state: IAppState) => state.init.isInitComplete;

export const selectIsInitComplete = createSelector([_selectIsInitComplete], (isComplete) => isComplete);
