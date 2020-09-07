import React from "react";
import { useSelector } from "react-redux";

import {
  selectRecipes,
  selectFilterIngredients,
} from "../../app/recipes/recipes.selectors";
import { Container } from "@material-ui/core";
import { Recipe } from "./Recipe";

export const Recipes = () => {
  const sortedRecipes = useSelector(selectRecipes) ?? [];

  const filterIngredients = useSelector(selectFilterIngredients);

  const missingIngredients = filterIngredients.length
    ? sortedRecipes.map((recipe: any) =>
        recipe.ingredients.filter(
          (ingredient: any) => !filterIngredients.includes(ingredient.name)
        )
      )
    : [];

  return sortedRecipes ? (
    <Container>
      {sortedRecipes.map((recipe: any, i: number) => (
        <Recipe
          key={`recipe_${i}`}
          state={recipe}
          missingIngredients={missingIngredients[i]}
        />
      ))}
    </Container>
  ) : null;
};
