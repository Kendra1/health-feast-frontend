import React, { useEffect } from "react";
import {
  selectSelectedRecipe,
  selectSelectedRecipesMissingIngs,
  selectSelectedRecipesWarnings,
} from "../../app/recipes/recipes.selectors";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, Typography } from "@material-ui/core";
import { usePageStyle } from "../../assets/styles/page";
import { getSelectedRecipesWarnings } from "../../app/recipes/recipes.actions";

export const SelectedRecipe = () => {
  const pageClasses = usePageStyle();
  const dispatch = useDispatch();
  const state = useSelector(selectSelectedRecipe);
  const missingIngredients = useSelector(selectSelectedRecipesMissingIngs);

  useEffect(() => {
    dispatch(getSelectedRecipesWarnings());
  }, []);

  const recipeWarnings = useSelector(selectSelectedRecipesWarnings);
  return (
    <Container maxWidth="xl" className={pageClasses.root}>
      <Grid
        container
        direction="column"
        className={`${pageClasses.gridContainer} `}
      >
        {state ? (
          <>
            <Typography style={{ color: "white" }} variant="h2">
              {state.name}
            </Typography>
            <br />
            <br />
            <Typography style={{ color: "grey" }} variant="subtitle1">
              Calories: {state.calories}
            </Typography>
            <Typography style={{ color: "grey" }} variant="subtitle1">
              Meal Type: {state.mealType}
            </Typography>
            <Typography style={{ color: "grey" }} variant="subtitle1">
              Cuisine: {state.kitchenType}
            </Typography>
            <Typography style={{ color: "grey" }} variant="subtitle1">
              Preparation Time: {state.preparationTime}
            </Typography>
            <Typography style={{ color: "grey" }} variant="subtitle1">
              Recommended for: {state.noOfPeople} people
            </Typography>
            <br />
            <Typography style={{ color: "#273137" }} variant="h6">
              Instructions:
            </Typography>
            <Typography style={{ color: "#00a9fe" }} variant="h6">
              {state.instructions}
            </Typography>
            <br />
            {missingIngredients.lengths ? (
              <>
                <Typography style={{ color: "#273137" }} variant="h6">
                  You are missing:
                </Typography>
                <Typography style={{ color: "#00a9fe" }} variant="h6">
                  {missingIngredients.map(
                    (ingredient: any) => `-${ingredient.name} `
                  )}
                </Typography>
              </>
            ) : null}
            <br />
            <Typography style={{ color: "#e62e00" }} variant="h5">
              Warnings:
            </Typography>

            {Object.keys(recipeWarnings).map((ingredient, i) => (
              <Typography
                key={`warning_${i}`}
                style={{ color: "#00a9fe" }}
                variant="h6"
              >{`${ingredient}: ${
                recipeWarnings[`${ingredient}`]
              }`}</Typography>
            ))}
          </>
        ) : (
          <div>Recipe is not selected.</div>
        )}
      </Grid>
    </Container>
  );
};
