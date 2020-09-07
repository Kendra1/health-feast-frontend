import { createSelector } from "reselect";
import { IAppState } from "../app.types";

const _selectAllExercises = (state: IAppState) => state.exercises.allExercises;

const _selectWorkouts = (state: IAppState) => state.exercises.workouts;

const _selectExercisesFilter = (state: IAppState) =>
  state.exercises.exercisesFilter;

export const selectAllExercises = createSelector(
  _selectAllExercises,
  (value) => value
);

export const selectWorkouts = createSelector(_selectWorkouts, (value) => value);

export const selectExercisesFilter = createSelector(
  _selectExercisesFilter,
  (value) => value
);
