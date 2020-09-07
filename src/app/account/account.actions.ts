import {
  GET_LOGGED_USERS_DATA,
  STORE_LOGGED_USERS_DATA,
  GET_MEAL_HISTORY,
  STORE_MEAL_HISTORY,
  STORE_ALL_INGREDIENTS,
  STORE_ALL_RECIPES,
  GET_ALL_INGREDIENTS,
  GET_ALL_RECIPES,
  SAVE_USER_DATA,
  CLEAR_LOGGED_USERS_DATA,
  GET_RECOMMENDED_CALORIES,
  STORE_RECOMMENDED_CALORIES,
  GET_CALORIE_INTAKE,
  STORE_CALORIE_INTAKE,
  STORE_GOAL,
  UPDATE_GOAL,
  ADD_HISTORY_MEAL,
  STORE_WARNING,
  GET_ALL_WORKOUTS,
  STORE_ALL_WORKOUTS,
} from "./account.constants";

export const getLoggedUsersData = () => ({
  type: GET_LOGGED_USERS_DATA,
});

export const storeLoggedUsersData = (payload: any) => ({
  type: STORE_LOGGED_USERS_DATA,
  payload,
});

export const clearLoggedUsersData = () => ({
  type: CLEAR_LOGGED_USERS_DATA,
});

export const getRecommendedCalories = () => ({
  type: GET_RECOMMENDED_CALORIES,
});

export const storeRecommendedCalories = (payload: any) => ({
  type: STORE_RECOMMENDED_CALORIES,
  payload,
});

export const getCalorieIntake = () => ({
  type: GET_CALORIE_INTAKE,
});

export const storeCalorieIntake = (payload: any) => ({
  type: STORE_CALORIE_INTAKE,
  payload,
});

export const updateGoal = (payload: any) => ({
  type: UPDATE_GOAL,
  payload,
});

export const storeGoal = (payload: any) => ({
  type: STORE_GOAL,
  payload,
});

export const getMealHistory = (payload: any) => ({
  type: GET_MEAL_HISTORY,
  payload,
});

export const storeMealHistory = (payload: any) => ({
  type: STORE_MEAL_HISTORY,
  payload,
});

export const getAllIngredients = () => ({
  type: GET_ALL_INGREDIENTS,
});

export const storeAllIngredients = (payload: any) => ({
  type: STORE_ALL_INGREDIENTS,
  payload,
});

export const getAllRecipes = () => ({
  type: GET_ALL_RECIPES,
});

export const storeAllRecipes = (payload: any) => ({
  type: STORE_ALL_RECIPES,
  payload,
});

export const saveUserData = (payload: any) => ({
  type: SAVE_USER_DATA,
  payload,
});

export const addHistoryMeal = (payload: any) => ({
  type: ADD_HISTORY_MEAL,
  payload,
});

export const storeWarning = (payload: any) => ({
  type: STORE_WARNING,
  payload,
});

export const getAllWorkouts = () => ({
  type: GET_ALL_WORKOUTS,
});

export const storeAllWorkouts = (payload: any) => ({
  type: STORE_ALL_WORKOUTS,
  payload,
});
