import { takeLatest } from "redux-saga/effects";
import { GET_WORKOUTS, GET_ALL_EXERCISES } from "./exercises.constants";
import { getAllExercisesSaga, getWorkoutsSaga } from "./exercises.saga";

export function* watchExercisesSaga() {
  yield takeLatest(GET_ALL_EXERCISES, getAllExercisesSaga);
  yield takeLatest(GET_WORKOUTS, getWorkoutsSaga);
}
