import { IApiRequestInfo } from "../api/api.types";

export const loggedUserAPI = (): IApiRequestInfo => ({
  uri: `/users/user`,
  method: "get",
});

export const mealHistoryAPI = (date: any): IApiRequestInfo => ({
  uri: `/users/mealHistory?date=${date}`,
  method: "get",
});

export const allIngredientsAPI = (): IApiRequestInfo => ({
  uri: `/api/ingredient/ingredients`,
  method: "get",
});

export const allRecipesAPI = (): IApiRequestInfo => ({
  uri: `/api/recipe/recipes`,
  method: "get",
});

export const saveUserDataAPI = (userData: any): IApiRequestInfo => ({
  uri: `/api/user`,
  method: "patch",
  data: userData,
});

export const updateGoalAPI = (goal: any): IApiRequestInfo => ({
  uri: `api/user/recommendedCalories?goal=${goal}`,
  method: "get",
});

export const recommendedCaloriesAPI = (): IApiRequestInfo => ({
  uri: "/api/user/calories",
  method: "get",
});

export const caloriesIntakeAPI = (): IApiRequestInfo => ({
  uri: "/api/user/dailyCaloriesStatus",
  method: "get",
});

export const addMealAPI = (data: any): IApiRequestInfo => ({
  uri: "/api/user/dailyMeal",
  method: "post",
  data,
});
