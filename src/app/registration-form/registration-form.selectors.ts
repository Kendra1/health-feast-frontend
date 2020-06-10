import { createSelector } from "reselect";

import { IAppState } from "../app.types";

const _selectIsLoading = (state: IAppState) => state.registrationForm.isLoading;

export const selectIsLoading = createSelector(
  _selectIsLoading,
  (value) => value
);
