import {
  STORE_INGREDIENTS,
  STORE_RECIPES,
  GET_RECIPES,
  STORE_FILTER_INGREDIENTS,
  STORE_SELECTED_RECIPE,
  STORE_SELECTED_RECIPES_MISSING_INGS,
  STORE_SELECTED_RECIPES_WARNINGS,
} from "./recipes.constants";

export interface IRecipesState {
  ingredients: IIngredient[];
  recipes: any;
  filterIngredients: any;
  selectedRecipe: any;
  selectedRecipesMissingIngs: any;
  selectedRecipesWarnings: any;
}

export interface IIngredient {
  name: string;
  price: number;
  warning: string;
  sale: any;
  nutritionTable: any;
  vitaminTable: any;
  mineralTable: any;
}

export interface IStoreIngredientsAction {
  type: typeof STORE_INGREDIENTS;
  payload: IIngredient[];
}

export interface IStoreRecipesAction {
  type: typeof STORE_RECIPES;
  payload: any;
}

export interface IGetRecipesAction {
  type: typeof GET_RECIPES;
  payload: any;
}

export interface IStoreFilterIngredientsAction {
  type: typeof STORE_FILTER_INGREDIENTS;
  payload: any;
}

export interface IStoreSelectedRecipeAction {
  type: typeof STORE_SELECTED_RECIPE;
  payload: any;
}

export interface IStoreSelectedRecipesMissingIngsAction {
  type: typeof STORE_SELECTED_RECIPES_MISSING_INGS;
  payload: any;
}

export interface IStoreSelectedRecipesWarningsAction {
  type: typeof STORE_SELECTED_RECIPES_WARNINGS;
  payload: any;
}

export type IRecipesTypes =
  | IStoreIngredientsAction
  | IStoreRecipesAction
  | IStoreSelectedRecipesMissingIngsAction
  | IStoreFilterIngredientsAction
  | IStoreSelectedRecipesWarningsAction
  | IStoreSelectedRecipeAction;
