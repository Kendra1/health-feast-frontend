import {
  STORE_ALL_EXERCISES,
  STORE_WORKOUTS,
  STORE_EXERCISES_FILTER,
} from "./exercises.constants";

export interface IExercisesState {
  allExercises: any;
  workouts: any;
  exercisesFilter: any;
}

export interface IStoreAllExercisesAction {
  type: typeof STORE_ALL_EXERCISES;
  payload: any;
}

export interface IStoreWorkoutsAction {
  type: typeof STORE_WORKOUTS;
  payload: any;
}

export interface IStoreExercisesFilterAction {
  type: typeof STORE_EXERCISES_FILTER;
  payload: any;
}

export type IExercisesType =
  | IStoreAllExercisesAction
  | IStoreWorkoutsAction
  | IStoreExercisesFilterAction;
