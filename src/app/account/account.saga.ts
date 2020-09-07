import { put, select, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  loggedUserAPI,
  mealHistoryAPI,
  allRecipesAPI,
  allIngredientsAPI,
  saveUserDataAPI,
  updateGoalAPI,
  caloriesIntakeAPI,
  recommendedCaloriesAPI,
  addMealAPI,
} from "./account.api";
import {
  storeLoggedUsersData,
  storeMealHistory,
  storeAllIngredients,
  storeAllRecipes,
  storeRecommendedCalories,
  storeGoal,
  storeCalorieIntake,
} from "./account.actions";
import { loggedUserDataAPI } from "../auth/auth.api";
import { persistLoggedUsersData } from "../auth/auth.utils";

export function* getLoggedUsersDataSaga() {
  try {
    const loggedUsersData = yield call(apiRequest, loggedUserDataAPI());
    yield put(storeLoggedUsersData(loggedUsersData));
    yield put(storeGoal(loggedUsersData.goal));
    yield call(persistLoggedUsersData, loggedUsersData);
  } catch (e) {
    console.error(e);
  }
}

export function* getRecommendedCaloriesSaga() {
  try {
    const recommendedCalories = yield call(
      apiRequest,
      recommendedCaloriesAPI()
    );
    yield put(storeRecommendedCalories(recommendedCalories));
  } catch (e) {
    console.error(e);
  }
}

export function* updateGoalSaga(action: any) {
  try {
    const recommendedCalories = yield call(
      apiRequest,
      updateGoalAPI(action.payload)
    );

    yield put(storeGoal(action.payload));
    yield put(storeRecommendedCalories(recommendedCalories));
  } catch (e) {
    console.error(e);
  }
}

export function* getCaloriesIntakeSaga() {
  try {
    const calorieIntake = yield call(apiRequest, caloriesIntakeAPI());
    yield put(storeCalorieIntake(calorieIntake));
  } catch (e) {
    console.error(e);
  }
}

export function* getMealHistorySaga(action: any) {
  try {
    const date = action.payload;
    const mealHistory = yield call(apiRequest, mealHistoryAPI(date));
    yield put(storeMealHistory(mealHistory));
  } catch (e) {
    console.error(e);
  }
}

export function* getAllIngredientsSaga() {
  try {
    const ingredients = yield call(apiRequest, allIngredientsAPI());
    yield put(storeAllIngredients(ingredients));
  } catch (e) {
    console.error(e);
  }
}

export function* getAllRecipesSaga() {
  try {
    const recipes = yield call(apiRequest, allRecipesAPI());
    yield put(storeAllRecipes(recipes));
  } catch (e) {
    console.error(e);
  }
}

export function* saveUserDataSaga(action: any) {
  try {
    const data = action.payload;
    const user = yield call(apiRequest, saveUserDataAPI(data));
    const loggedUsersData = yield call(apiRequest, loggedUserDataAPI());
    yield put(storeLoggedUsersData(loggedUsersData));
    yield put(storeGoal(loggedUsersData.goal));
    yield call(persistLoggedUsersData, loggedUsersData);
  } catch (e) {
    console.error(e);
  }
}

export function* addMealHistorySaga(action: any) {
  try {
    const calories = yield call(apiRequest, addMealAPI(action.payload));
  } catch (e) {
    console.error(e);
  }
}
