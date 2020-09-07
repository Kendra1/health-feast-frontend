import { takeLatest } from "redux-saga/effects";
import {
  GET_LOGGED_USERS_DATA,
  SAVE_USER_DATA,
  GET_RECOMMENDED_CALORIES,
  UPDATE_GOAL,
  GET_CALORIE_INTAKE,
  GET_ALL_INGREDIENTS,
  GET_ALL_RECIPES,
  ADD_HISTORY_MEAL,
} from "./account.constants";
import {
  getLoggedUsersDataSaga,
  saveUserDataSaga,
  getRecommendedCaloriesSaga,
  updateGoalSaga,
  getCaloriesIntakeSaga,
  getAllIngredientsSaga,
  getAllRecipesSaga,
  addMealHistorySaga,
} from "./account.saga";

export function* watchAccountSaga() {
  yield takeLatest(GET_LOGGED_USERS_DATA, getLoggedUsersDataSaga);
  yield takeLatest(SAVE_USER_DATA, saveUserDataSaga);
  yield takeLatest(GET_RECOMMENDED_CALORIES, getRecommendedCaloriesSaga);
  yield takeLatest(UPDATE_GOAL, updateGoalSaga);
  yield takeLatest(GET_CALORIE_INTAKE, getCaloriesIntakeSaga);
  yield takeLatest(GET_ALL_INGREDIENTS, getAllIngredientsSaga);
  yield takeLatest(GET_ALL_RECIPES, getAllRecipesSaga);
  yield takeLatest(ADD_HISTORY_MEAL, addMealHistorySaga);
}
