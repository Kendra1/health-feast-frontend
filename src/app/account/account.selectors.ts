import { createSelector } from "reselect";
import { IAppState } from "../app.types";

const _selectLoggedUsersData = (state: IAppState) =>
  state.account.loggedUsersData;

const _selectMealHistory = (state: IAppState) => state.account.mealHistory;

const _selectAllIngredients = (state: IAppState) =>
  state.account.allIngredients;

const _selectAllRecipes = (state: IAppState) => state.account.allRecipes;

const _selectRecommendedCalories = (state: IAppState) =>
  state.account.recommendedCalories;

const _selectGoal = (state: IAppState) => state.account.goal;

const _selectCaloriesIntake = (state: IAppState) => state.account.calorieIntake;

const _selectAllWorkouts = (state: IAppState) => state.account.allWorkouts;

export const selectLoggedUsersData = createSelector(
  _selectLoggedUsersData,
  (value) => value
);

export const selectMealHistory = createSelector(
  _selectMealHistory,
  (value) => value
);

export const selectAllIngredients = createSelector(
  _selectAllIngredients,
  (value) => value
);

export const selectAllRecipes = createSelector(
  _selectAllRecipes,
  (value) => value
);

export const selectRecommendedCalories = createSelector(
  _selectRecommendedCalories,
  (value) => value
);

export const selectGoal = createSelector(_selectGoal, (value) => value);

export const selectCaloriesIntake = createSelector(
  _selectCaloriesIntake,
  (value) => value
);

export const selectAllWorkouts = createSelector(
  _selectAllWorkouts,
  (value) => value
);
