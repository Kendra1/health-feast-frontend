import {
  STORE_LOGGED_USERS_DATA,
  STORE_MEAL_HISTORY,
  STORE_ALL_RECIPES,
  STORE_ALL_INGREDIENTS,
  STORE_CALORIE_INTAKE,
  STORE_RECOMMENDED_CALORIES,
  STORE_GOAL,
  STORE_WARNING,
  STORE_ALL_WORKOUTS,
} from "./account.constants";

export interface IAccountState {
  loggedUsersData: any;
  recommendedCalories: any;
  calorieIntake: any;
  goal: any;
  mealHistory: any;
  allIngredients: any;
  allRecipes: any;
  warning: any;
  allWorkouts: any;
}

export interface IStoreLoggedUsersDataAction {
  type: typeof STORE_LOGGED_USERS_DATA;
  payload: any;
}

export interface IStoreRecommendedCaloriesAction {
  type: typeof STORE_RECOMMENDED_CALORIES;
  payload: any;
}

export interface IStoreCalorieIntakeAction {
  type: typeof STORE_CALORIE_INTAKE;
  payload: any;
}

export interface IStoreMealHistoryAction {
  type: typeof STORE_MEAL_HISTORY;
  payload: any;
}

export interface IStoreAllIngredientsAction {
  type: typeof STORE_ALL_INGREDIENTS;
  payload: any;
}

export interface IStoreAllRecipesAction {
  type: typeof STORE_ALL_RECIPES;
  payload: any;
}

export interface IStoreGoalAction {
  type: typeof STORE_GOAL;
  payload: any;
}

export interface IStoreWarningAction {
  type: typeof STORE_WARNING;
  payload: any;
}

export interface IStoreAllWorkoutsAction {
  type: typeof STORE_ALL_WORKOUTS;
  payload: any;
}

export type IAccountTypes =
  | IStoreLoggedUsersDataAction
  | IStoreMealHistoryAction
  | IStoreRecommendedCaloriesAction
  | IStoreCalorieIntakeAction
  | IStoreAllIngredientsAction
  | IStoreAllRecipesAction
  | IStoreGoalAction
  | IStoreWarningAction
  | IStoreAllWorkoutsAction;
