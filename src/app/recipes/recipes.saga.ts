import { put, select, call } from "redux-saga/effects";
import apiRequest from "../api/api.saga";
import {
  ingredientsAPI,
  getRecipesAPI,
  getRecipesByNameAPI,
  getRecipesWarningsAPI,
} from "./recipes.api";
import {
  storeIngredients,
  storeRecipes,
  storeSelectedRecipesWarnings,
} from "./recipes.actions";
import {
  selectFilterIngredients,
  selectSelectedRecipe,
} from "./recipes.selectors";

export function* getIngredientsSaga() {
  const ingredients = yield call(apiRequest, ingredientsAPI());
  yield put(storeIngredients(ingredients));
}

export function* getRecipesSaga() {
  try {
    const filters = yield select(selectFilterIngredients);
    const recipes = yield call(apiRequest, getRecipesAPI(filters));

    yield put(storeRecipes(recipes));
  } catch (e) {
    console.error(e);
  }
}

export function* getRecipesByNameSaga(action: any) {
  try {
    const recipes = yield call(apiRequest, getRecipesByNameAPI(action.payload));
    yield put(storeRecipes(recipes));
  } catch (e) {
    console.error(e);
  }
}

export function* getSelectedRecipesWarningsSaga() {
  try {
    const state = yield select(selectSelectedRecipe);
    const id = state.id;
    const warnings = yield call(apiRequest, getRecipesWarningsAPI(id));
    yield put(storeSelectedRecipesWarnings(warnings));
  } catch (e) {
    console.error(e);
  }
}
