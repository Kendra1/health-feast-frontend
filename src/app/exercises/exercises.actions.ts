import {
  GET_ALL_EXERCISES,
  STORE_ALL_EXERCISES,
  GET_WORKOUTS,
  STORE_WORKOUTS,
  STORE_EXERCISES_FILTER,
} from "./exercises.constants";

export const getAllExercises = () => ({
  type: GET_ALL_EXERCISES,
});

export const storeAllExercises = (payload: any) => ({
  type: STORE_ALL_EXERCISES,
  payload,
});

export const getWorkouts = () => ({
  type: GET_WORKOUTS,
});

export const storeWorkouts = (payload: any) => ({
  type: STORE_WORKOUTS,
  payload,
});

export const storeExercisesFilter = (payload: any) => ({
  type: STORE_EXERCISES_FILTER,
  payload,
});
