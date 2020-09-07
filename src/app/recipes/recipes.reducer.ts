import { Reducer, combineReducers } from "redux";
import {
  IRecipesState,
  IStoreIngredientsAction,
  IRecipesTypes,
  IStoreRecipesAction,
  IStoreFilterIngredientsAction,
  IStoreSelectedRecipeAction,
  IStoreSelectedRecipesMissingIngsAction,
  IStoreSelectedRecipesWarningsAction,
} from "./recipes.types";
import {
  STORE_INGREDIENTS,
  STORE_RECIPES,
  STORE_FILTER_INGREDIENTS,
  STORE_SELECTED_RECIPE,
  STORE_SELECTED_RECIPES_WARNINGS,
} from "./recipes.constants";
import { actionChannel } from "redux-saga/effects";

const initialState: IRecipesState = {
  ingredients: [],
  recipes: null,
  filterIngredients: [],
  selectedRecipe: null,
  selectedRecipesMissingIngs: [],
  selectedRecipesWarnings: "",
};

const _ingredientsReducer: Reducer<
  IRecipesState["ingredients"],
  IStoreIngredientsAction
> = (
  state: IRecipesState["ingredients"] = initialState.ingredients,
  action: IStoreIngredientsAction
) => {
  if (action.type === STORE_INGREDIENTS) {
    return action.payload;
  }
  return state;
};

const _recipesReducer: Reducer<
  IRecipesState["recipes"],
  IStoreRecipesAction
> = (
  state: IRecipesState["recipes"] = initialState.recipes,
  action: IStoreRecipesAction
) => {
  if (action.type === STORE_RECIPES) {
    return action.payload;
  }
  return state;
};

const _filterIngredientsReducer: Reducer<
  IRecipesState["filterIngredients"],
  IStoreFilterIngredientsAction
> = (
  state: IRecipesState["filterIngredients"] = initialState.filterIngredients,
  action: IStoreFilterIngredientsAction
) => {
  if (action.type === STORE_FILTER_INGREDIENTS) {
    return action.payload;
  }
  return state;
};

const _selectedRecipeReducer: Reducer<
  IRecipesState["selectedRecipe"],
  IStoreSelectedRecipeAction
> = (
  state: IRecipesState["selectedRecipe"] = initialState.selectedRecipe,
  action: IStoreSelectedRecipeAction
) => {
  if (action.type === STORE_SELECTED_RECIPE) {
    return action.payload;
  }
  return state;
};

const _selectedRecipesMissingIngs: Reducer<
  IRecipesState["selectedRecipesMissingIngs"],
  IStoreSelectedRecipesMissingIngsAction
> = (
  state: IRecipesState["selectedRecipesMissingIngs"] = initialState.selectedRecipesMissingIngs,
  action: IStoreSelectedRecipesMissingIngsAction
) => {
  if (action.type === "STORE_SELECTED_RECIPES_MISSING_INGS") {
    return action.payload;
  }
  return state;
};

const _selectedRecipesWarnings: Reducer<
  IRecipesState["selectedRecipesWarnings"],
  IStoreSelectedRecipesWarningsAction
> = (
  state: IRecipesState["selectedRecipesWarnings"] = initialState.selectedRecipesWarnings,
  action: IStoreSelectedRecipesWarningsAction
) => {
  if (action.type === STORE_SELECTED_RECIPES_WARNINGS) {
    return action.payload;
  }
  return state;
};

export const recipesReducer: Reducer<
  IRecipesState,
  IRecipesTypes
> = combineReducers({
  ingredients: _ingredientsReducer,
  recipes: _recipesReducer,
  filterIngredients: _filterIngredientsReducer,
  selectedRecipe: _selectedRecipeReducer,
  selectedRecipesMissingIngs: _selectedRecipesMissingIngs,
  selectedRecipesWarnings: _selectedRecipesWarnings,
});
