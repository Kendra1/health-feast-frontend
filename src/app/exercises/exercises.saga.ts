import { put, select, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import { allExercisesAPI, getWorkoutsAPI } from "./exercises.api";
import { storeAllExercises, storeWorkouts } from "./exercises.actions";
import { selectExercisesFilter } from "./exercises.selectors";

export function* getAllExercisesSaga() {
  try {
    const exercises = yield call(apiRequest, allExercisesAPI());
    yield put(storeAllExercises(exercises));
  } catch (e) {
    console.error(e);
  }
}

export function* getWorkoutsSaga() {
  try {
    const filters = yield select(selectExercisesFilter);
    const workouts = yield call(apiRequest, getWorkoutsAPI(filters));
    yield put(storeWorkouts(workouts));
  } catch (e) {
    console.error(e);
  }
}
