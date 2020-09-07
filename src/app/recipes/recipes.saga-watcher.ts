import { takeLatest } from "redux-saga/effects";
import {
  GET_INGREDIENTS,
  GET_RECIPES,
  GET_RECIPES_BY_NAME,
  GET_SELECTED_RECIPES_WARNINGS,
} from "./recipes.constants";
import {
  getIngredientsSaga,
  getRecipesSaga,
  getRecipesByNameSaga,
  getSelectedRecipesWarningsSaga,
} from "./recipes.saga";

export function* watchRecipeSaga() {
  yield takeLatest(GET_INGREDIENTS, getIngredientsSaga);
  yield takeLatest(GET_RECIPES, getRecipesSaga);
  yield takeLatest(GET_RECIPES_BY_NAME, getRecipesByNameSaga);
  yield takeLatest(
    GET_SELECTED_RECIPES_WARNINGS,
    getSelectedRecipesWarningsSaga
  );
}
