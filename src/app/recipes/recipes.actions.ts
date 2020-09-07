import {
  GET_INGREDIENTS,
  STORE_INGREDIENTS,
  GET_RECIPES,
  STORE_RECIPES,
  STORE_FILTER_INGREDIENTS,
  GET_FILTER_INGREDIENTS,
  GET_SELECTED_RECIPE,
  STORE_SELECTED_RECIPE,
  GET_SELECTED_RECIPES_MISSING_INGS,
  STORE_SELECTED_RECIPES_MISSING_INGS,
  GET_RECIPES_BY_NAME,
  GET_SELECTED_RECIPES_WARNINGS,
  STORE_SELECTED_RECIPES_WARNINGS,
} from "./recipes.constants";

export const getIngredients = () => ({
  type: GET_INGREDIENTS,
});

export const storeIngredients = (payload: any) => ({
  type: STORE_INGREDIENTS,
  payload,
});

export const getRecipes = () => ({
  type: GET_RECIPES,
});

export const getRecipesByName = (payload: any) => ({
  type: GET_RECIPES_BY_NAME,
  payload,
});

export const storeRecipes = (payload: any) => ({
  type: STORE_RECIPES,
  payload,
});

export const storeFilterIngredients = (payload: any) => ({
  type: STORE_FILTER_INGREDIENTS,
  payload,
});

export const getFilterIngredients = () => ({
  type: GET_FILTER_INGREDIENTS,
});

export const getSelectedRecipe = () => ({
  type: GET_SELECTED_RECIPE,
});

export const storeSelectedRecipe = (payload: any) => ({
  type: STORE_SELECTED_RECIPE,
  payload,
});

export const getSelectedRecipesMissingIngs = () => ({
  type: GET_SELECTED_RECIPES_MISSING_INGS,
});

export const storeSelectedRecipesMissingIngs = (payload: any) => ({
  type: STORE_SELECTED_RECIPES_MISSING_INGS,
  payload,
});

export const getSelectedRecipesWarnings = () => ({
  type: GET_SELECTED_RECIPES_WARNINGS,
});

export const storeSelectedRecipesWarnings = (payload: any) => ({
  type: STORE_SELECTED_RECIPES_WARNINGS,
  payload,
});
