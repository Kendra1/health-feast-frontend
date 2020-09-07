import { IApiRequestInfo } from "../api/api.types";

export const ingredientsAPI = (): IApiRequestInfo => ({
  uri: "/api/ingredient/ingredients",
  method: "get",
});

export const recipesAPI = (data: any): IApiRequestInfo => ({
  uri: "/recipes",
  method: "post",
  data,
});

export const getRecipesAPI = (data: any): IApiRequestInfo => ({
  uri: `/api/drools/recipes`,
  method: "post",
  data,
});

export const getRecipesByNameAPI = (data: any): IApiRequestInfo => ({
  uri: `/api/drools/recipesByName?name=${data}`,
  method: "get",
});

export const getRecipesWarningsAPI = (data: any): IApiRequestInfo => ({
  uri: `/api/drools/recipe/${data}/warning`,
  method: "get",
});
