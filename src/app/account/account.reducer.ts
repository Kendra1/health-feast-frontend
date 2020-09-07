import { Reducer, combineReducers } from "redux";
import {
  IAccountState,
  IStoreLoggedUsersDataAction,
  IAccountTypes,
  IStoreMealHistoryAction,
  IStoreAllIngredientsAction,
  IStoreAllRecipesAction,
  IStoreRecommendedCaloriesAction,
  IStoreCalorieIntakeAction,
  IStoreGoalAction,
  IStoreWarningAction,
  IStoreAllWorkoutsAction,
} from "./account.types";
import {
  STORE_LOGGED_USERS_DATA,
  STORE_MEAL_HISTORY,
  STORE_ALL_INGREDIENTS,
  STORE_ALL_RECIPES,
  CLEAR_LOGGED_USERS_DATA,
  STORE_RECOMMENDED_CALORIES,
  STORE_CALORIE_INTAKE,
  STORE_GOAL,
  STORE_WARNING,
  STORE_ALL_WORKOUTS,
} from "./account.constants";

const initialState: IAccountState = {
  loggedUsersData: null,
  recommendedCalories: null,
  calorieIntake: null,
  goal: null,
  warning: "",
  allWorkouts: [],
  mealHistory: [
    {
      name: "cheese",
      calories: 100,
      price: 50,
      warning: "",
      sale: null,
      nutritionTable: null,
      vitaminTable: null,
      mineralTable: null,
    },
    {
      name: "oil",
      price: 100,
      calories: 200,
      warning: "Caloric",
      sale: null,
      nutritionTable: null,
      vitaminTable: null,
      mineralTable: null,
    },
    {
      priority: 7,
      name: "pizza",
      calories: "900",
      instructions: "Make pizza",
      ingredients: [
        {
          name: "chicken",
          calories: "100",
          warning: "Lactose intolerance",
        },
        {
          name: "ketchup",
          calories: "200",
          warning: "Lactose intolerance",
        },
        {
          name: "cheese",
          calories: "300",
          warning: "Lactose intolerance",
        },
        {
          name: "ham",
          calories: "150",
          warning: "Lactose intolerance",
        },
        {
          name: "mushrooms",
          calories: "150",
          warning: "Lactose intolerance",
        },
      ],
    },
    {
      priority: 1,
      name: "stew",
      calories: "900",
      instructions: "Make pizza",
      ingredients: [
        {
          name: "base",
          calories: "100",
        },
        {
          name: "ketchup",
          calories: "200",
        },
        {
          name: "chicken",
          calories: "300",
        },
        {
          name: "ham",
          calories: "150",
        },
        {
          name: "mushrooms",
          calories: "150",
        },
      ],
    },
  ],
  allIngredients: [],
  allRecipes: [],
};

const loggedUserReducer: Reducer<
  IAccountState["loggedUsersData"],
  IStoreLoggedUsersDataAction
> = (
  state: IAccountState["loggedUsersData"] = initialState.loggedUsersData,
  action: IStoreLoggedUsersDataAction
) => {
  if (action.type === STORE_LOGGED_USERS_DATA) {
    return action.payload;
  } else if (action.type === CLEAR_LOGGED_USERS_DATA) {
    return state;
  }
  return state;
};

const recommendedCaloriesReducer: Reducer<
  IAccountState["recommendedCalories"],
  IStoreRecommendedCaloriesAction
> = (
  state: IAccountState["recommendedCalories"] = initialState.recommendedCalories,
  action: IStoreRecommendedCaloriesAction
) => {
  if (action.type === STORE_RECOMMENDED_CALORIES) {
    return action.payload;
  }
  return state;
};

const calorieIntakeReducer: Reducer<
  IAccountState["calorieIntake"],
  IStoreCalorieIntakeAction
> = (
  state: IAccountState["calorieIntake"] = initialState.calorieIntake,
  action: IStoreCalorieIntakeAction
) => {
  if (action.type === STORE_CALORIE_INTAKE) {
    return action.payload;
  }
  return state;
};

const goalReducer: Reducer<IAccountState["goal"], IStoreGoalAction> = (
  state: IAccountState["goal"] = initialState.goal,
  action: IStoreGoalAction
) => {
  if (action.type === STORE_GOAL) {
    return action.payload;
  }
  return state;
};

const mealHistoryReducer: Reducer<
  IAccountState["mealHistory"],
  IStoreMealHistoryAction
> = (
  state: IAccountState["mealHistory"] = initialState.mealHistory,
  action: IStoreMealHistoryAction
) => {
  if (action.type === STORE_MEAL_HISTORY) {
    return action.payload;
  }
  return state;
};

const allIngredientsReducer: Reducer<
  IAccountState["allIngredients"],
  IStoreAllIngredientsAction
> = (
  state: IAccountState["allIngredients"] = initialState.allIngredients,
  action: IStoreAllIngredientsAction
) => {
  if (action.type === STORE_ALL_INGREDIENTS) {
    return action.payload;
  }
  return state;
};

const allRecipesReducer: Reducer<
  IAccountState["allRecipes"],
  IStoreAllRecipesAction
> = (
  state: IAccountState["allRecipes"] = initialState.allRecipes,
  action: IStoreAllRecipesAction
) => {
  if (action.type === STORE_ALL_RECIPES) {
    return action.payload;
  }
  return state;
};

const warningReducer: Reducer<IAccountState["warning"], IStoreWarningAction> = (
  state: IAccountState["warning"] = initialState.warning,
  action: IStoreWarningAction
) => {
  if (action.type === STORE_WARNING) {
    return action.payload;
  }
  return state;
};

const allWorkoutsReducer: Reducer<
  IAccountState["allWorkouts"],
  IStoreAllWorkoutsAction
> = (
  state: IAccountState["allWorkouts"] = initialState.allWorkouts,
  action: IStoreAllWorkoutsAction
) => {
  if (action.type === STORE_ALL_WORKOUTS) {
    return action.payload;
  }
  return state;
};

export const accountReducer: Reducer<
  IAccountState,
  IAccountTypes
> = combineReducers({
  loggedUsersData: loggedUserReducer,
  recommendedCalories: recommendedCaloriesReducer,
  calorieIntake: calorieIntakeReducer,
  mealHistory: mealHistoryReducer,
  allIngredients: allIngredientsReducer,
  allRecipes: allRecipesReducer,
  goal: goalReducer,
  warning: warningReducer,
  allWorkouts: allWorkoutsReducer,
});
