import React, { FunctionComponent } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import {
  storeSelectedRecipe,
  storeSelectedRecipesMissingIngs,
} from "../../app/recipes/recipes.actions";
import { useDispatch } from "react-redux";

export const Recipe: FunctionComponent<{
  state: any;
  missingIngredients: any;
}> = ({ state, missingIngredients }) => {
  const dispatch = useDispatch();
  const storeRecipe = () => {
    dispatch(storeSelectedRecipe(state));
    if (missingIngredients) {
      dispatch(storeSelectedRecipesMissingIngs(missingIngredients));
    }
  };

  return (
    <Grid
      item
      style={{
        textAlign: "left",
        marginBottom: "3rem",
        border: "1px solid white",
      }}
    >
      <Typography variant="h4">
        <Link
          component={RouterLink}
          to="/selectedRecipe"
          style={{ color: "white" }}
          onClick={storeRecipe}
        >
          {state.name}
        </Link>
      </Typography>
      <Typography style={{ color: "grey" }} variant="subtitle1">
        Calories: {state.calories}
      </Typography>
      <Typography variant="h6">{state.instructions}</Typography>
      {missingIngredients ? (
        <>
          <Typography variant="h6">You are missing:</Typography>
          <Typography variant="h6">
            {missingIngredients.map(
              (ingredient: any) => `-${ingredient.name} `
            )}
          </Typography>
        </>
      ) : null}
    </Grid>
  );
};
