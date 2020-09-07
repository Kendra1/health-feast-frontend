import { Reducer, combineReducers } from "redux";
import {
  IExercisesState,
  IStoreAllExercisesAction,
  IStoreWorkoutsAction,
  IExercisesType,
  IStoreExercisesFilterAction,
} from "./exercises.types";
import {
  STORE_ALL_EXERCISES,
  STORE_WORKOUTS,
  STORE_EXERCISES_FILTER,
} from "./exercises.constants";

const initialState: IExercisesState = {
  allExercises: ["shoulder press", "bench press", "squat"],
  workouts: [],
  exercisesFilter: [],
};

const allExercisesReducer: Reducer<
  IExercisesState["allExercises"],
  IStoreAllExercisesAction
> = (
  state: IExercisesState["allExercises"] = initialState.allExercises,
  action: IStoreAllExercisesAction
) => {
  if (action.type === STORE_ALL_EXERCISES) {
    return action.payload;
  }
  return state;
};

const workoutsReducer: Reducer<
  IExercisesState["workouts"],
  IStoreWorkoutsAction
> = (
  state: IExercisesState["workouts"] = initialState.workouts,
  action: IStoreWorkoutsAction
) => {
  if (action.type === STORE_WORKOUTS) {
    return action.payload;
  }
  return state;
};

const exercisesFilterReducer: Reducer<
  IExercisesState["exercisesFilter"],
  IStoreExercisesFilterAction
> = (
  state: IExercisesState["exercisesFilter"] = initialState.exercisesFilter,
  action: IStoreExercisesFilterAction
) => {
  if (action.type === STORE_EXERCISES_FILTER) {
    return action.payload;
  }
  return state;
};

export const exercisesReducer: Reducer<
  IExercisesState,
  IExercisesType
> = combineReducers({
  allExercises: allExercisesReducer,
  workouts: workoutsReducer,
  exercisesFilter: exercisesFilterReducer,
});
