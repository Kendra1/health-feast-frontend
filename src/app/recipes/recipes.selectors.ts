import { createSelector } from "reselect";
import { IAppState } from "../app.types";

const _selectIngredients = (state: IAppState) => state.recipes.ingredients;

const _selectRecipes = (state: IAppState) => state.recipes.recipes;

const _selectFilterIngredients = (state: IAppState) =>
  state.recipes.filterIngredients;

const _selectSelectedRecipe = (state: IAppState) =>
  state.recipes.selectedRecipe;

const _selectSelectedRecipesMissingIngs = (state: IAppState) =>
  state.recipes.selectedRecipesMissingIngs;

const _selectSelectedRecipesWarnings = (state: IAppState) =>
  state.recipes.selectedRecipesWarnings;

export const selectIngredients = createSelector(
  _selectIngredients,
  (value) => value
);

export const selectRecipes = createSelector(_selectRecipes, (value) => value);

export const selectFilterIngredients = createSelector(
  _selectFilterIngredients,
  (value) => value
);

export const selectSelectedRecipe = createSelector(
  _selectSelectedRecipe,
  (value) => value
);

export const selectSelectedRecipesMissingIngs = createSelector(
  _selectSelectedRecipesMissingIngs,
  (value) => value
);

export const selectSelectedRecipesWarnings = createSelector(
  _selectSelectedRecipesWarnings,
  (value) => value
);
